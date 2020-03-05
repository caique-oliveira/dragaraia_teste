import React from 'react';

import { Container } from './styles';

import Cards from '../Cards';

export default function Body() {
  return (
    <Container>
      <h1>
        Crie este site <span>responsivo</span> com <span>React</span> utilizando{' '}
        <span>styled-components</span>
      </h1>

      <p>A fonte utilizada e a Open Sans de 300 a 800</p>
      <p>exemplo: 'Open Sans', Helvetica, sans-serif, arial;</p>
      <p>Ja as cores sao:</p>
      <p>#cores aqui</p>

      <Cards />
    </Container>
  );
}
