import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => (props.done ? 0.6 : 1)} & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
    button {
      padding: 6px 12px;
      border-radius: 4px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        opacity: 0.9;
        font-weight: 500;
        transition: visibility 1s linear;
      }
    }
  }

  ul {
    margin-top: 30px;
  }
`;
