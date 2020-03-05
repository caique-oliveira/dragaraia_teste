import React from 'react';

import { Container, Wrapper } from './styles';
import logo from '../../imagens/rd.png';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <nav>
          <img src={logo} alt="logo" />
        </nav>
        <aside>
          <ul>
            <li>
              <span>HTML5</span>
            </li>
            <li>
              <span>CSS3</span>
            </li>
            <li>
              <span>JAVASCRIPT</span>
            </li>
            <li>
              <span>REACT</span>
            </li>
            <li>
              <span>REDUX</span>
            </li>
          </ul>
        </aside>
      </Container>
    </Wrapper>
  );
}
