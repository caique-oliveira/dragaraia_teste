import React from 'react';

import Cards from '../Cards';
import Navbar from '../Navbar';
import Footer from '../Footer';

import { Container } from './styles';

export default function Wrapper({ toggleTheme }) {
  return (
    <Container>
      <Navbar />
      <Cards toggleTheme={toggleTheme} />
      <Footer />
    </Container>
  );
}
