import React, { useRef, useContext } from "react";
import PropTypes from "prop-types";

import { useDrag, useDrop } from "react-dnd";

import BoardContext from "../Board/context";

import { Container, Content, Label } from "./styles";

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: "CARD",
      index,
      listIndex
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return true;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;
      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return true;
      }
      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return true;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
      item.index = targetIndex;
      item.listIndex = targetListIndex;
      return true;
    }
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map(label => (
          <Label key={label} color={label} />
        ))}
        {data.title}
      </header>
      <Content>
        <p>{data.content}</p>
        {data.user && <img src={data.user} alt="" />}
      </Content>
    </Container>
  );
}

Card.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  index: PropTypes.number,
  listIndex: PropTypes.number
};

Card.defaultProps = {
  data: {},
  index: 0,
  listIndex: 0
};
