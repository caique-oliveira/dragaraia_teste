/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Container } from './styles';
import Mobile from '~/imagens/mobile.png';

export default function CardThemed({ toggleTheme }) {
  return (
      <div className="card" style={{ width: '20em' , height: '24em'  }}>
        <img
          className="card-img-top icon-mobile"
          src={Mobile}
          alt="card-mobile"
        />
        <div className="card-body">
          <h5 className="card-title3">Site Responsivo MOBILE</h5>
          <p className="card-text">
            Quando pressionado o botão <strong>alterar tema</strong>&nbsp;
            modifique o tema do site para blackfriday a seu gosto.
          </p>
          <a
            href="#"
            id="btn3"
            onClick={toggleTheme}
            className="btn btn-primary btn3"
          >
            alterar tema
          </a>
        </div>
      </div>
    
  );
}
