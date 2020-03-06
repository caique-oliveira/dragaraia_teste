import React from 'react';
import Header from '../../components/Header';
import Body from '../../components/Body';
import Footer from '../../components/Footer';
import { Container } from '../../styles/container-styles';

export default function Main() {
  return (
    <>
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    </>
  );
}
