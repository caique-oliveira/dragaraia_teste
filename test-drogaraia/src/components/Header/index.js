import React from 'react';

import {Wrapper} from '../../styles/header-styles';
import logo from '../../imagens/rd.png';

export default function Header() {
  return (
    <>
      <Wrapper>
        <nav>
          <img src={logo} alt="logo"/>
        </nav>
        <aside>
          <ul>
            <li>
              HTML5
            </li>
            <li>
              CSS3
            </li>
            <li>
              JAVASCRIPT
            </li>
            <li>
              REACT
            </li>
            <li>
              REDUX
            </li>
          </ul>
        </aside>
      </Wrapper>
    </>
  );
}
