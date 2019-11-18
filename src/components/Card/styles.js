import styled, { css } from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab;

  header {
    display: flex;
    justify-content: flex-start !important;
    width: 100%;
    padding: 12px 24px;
    font-weight: 500;
    background: rgba(230, 236, 245, 0.4);
  }

  p {
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    margin-top: 5px;
  }

  ${props =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;

export const Content = styled.span`
  padding: 15px;
`;

export const Label = styled.span`
  width: 12px;
  height: 12px;
  margin-right: 12px;
  border-radius: 2px;
  background: ${props => props.color};
`;
