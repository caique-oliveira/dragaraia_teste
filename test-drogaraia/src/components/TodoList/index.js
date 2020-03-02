import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  font-family: sans-serif;
  font-size: 18px;

  li {
    line-height: 36px;
  }
`;

const TodoList = () => (
  <List>
    <li>Fazer café</li>
    <li>Entrar na comunidade da Rocketseat</li>
    <li>Estudando ReactJS</li>
  </List>
);
export default TodoList;
