import React from "react";
import { MdViewColumn, MdPoll, MdExpandMore } from "react-icons/md";

import {
  Container,
  Content,
  Menu,
  MenuItem,
  SubMenu,
  SubMenuItem
} from "./styles";

export default function Header() {
  return (
    <Container>
      <h1>Kanfy</h1>
      <Content>
        <Menu>
          <MenuItem active> Desenvolvimento de Sofware - Agile </MenuItem>{" "}
        </Menu>
        <SubMenu>
          <SubMenuItem active>
            <MdViewColumn size={18} color="#fff" />
            <span> Visualizar em Kanban </span>
            <MdExpandMore size={18} color="#fff" />
          </SubMenuItem>
          <SubMenuItem>
            <MdPoll size={18} color="#fff" />
            <span> Relatórios </span>
            <MdExpandMore size={18} color="#fff" />
          </SubMenuItem>
        </SubMenu>
      </Content>
    </Container>
  );
}
