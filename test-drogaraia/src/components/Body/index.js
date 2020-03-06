import React from 'react';

import { Container, TextContent } from './../../styles/body-styles';

import Cards from '../Cards';

export default function Body() {
  return (
    <Container>
      <h1>
        Crie este site <span>responsivo</span> com <span>REACT</span> utilizando <span>styled-components</span>
      </h1>

      <TextContent>
        <p>
          A fonte utilizada e a Open Sans de 300 a 800.
          exemplo: "Open Sans", Helvetica, sans-serif, arial;
          Já as cores são:
        </p>
      </TextContent>

      <Cards />
    </Container>
  );
}
