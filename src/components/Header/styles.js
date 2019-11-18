import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`
  from { opacity: 0.6; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background: #434952;
  color: #fff;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  overflow: hidden;

  display: flex;
  align-items: center;
  h1 {
    padding: 0 30px;
  }
`;

export const Content = styled.div`
  height: 80px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Menu = styled.ul`
  height: 80px;

  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  padding: 6px 12px;
  font-weight: ${props => (props.active ? 500 : 400)};

  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${props => (props.active ? 1 : 0.6)};
  cursor: pointer;

  &:hover {
    opacity: 1;
    font-weight: 500;
    /* animation: ${FadeInAnimation} 0.5s linear;
    transition: visibility 1s linear; */
  }

  span {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const SubMenu = styled.ul`
  display: flex;
  align-items: center;
`;

export const SubMenuItem = styled.li`
  padding: 6px 12px;
  border-bottom: 2px solid ${props => (props.active ? "#fff" : "#434952")};
  font-weight: ${props => (props.active ? 500 : 400)};

  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${props => (props.active ? 1 : 0.6)};
  cursor: pointer;

  &:hover {
    border-color: #fff;
    opacity: 1;
    font-weight: 500;
    /* animation: ${FadeInAnimation} 1s linear;
    transition: visibility 1s linear; */
  }

  span {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
