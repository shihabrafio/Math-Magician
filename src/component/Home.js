import React from 'react';
import {
  Container, HeadTag, Footer, P,
} from '../styles/Home.styles';

const Home = () => (
  <Container>
    <HeadTag>Welcome to my page</HeadTag>
    <P>
      Math magicians is a website for all fans of mathematics. It is a Single
      Page App (SPA) that allows users to: make simple calculations and read a
      random math-related quote. Enjoy
    </P>
    <Footer>© Rafio</Footer>
  </Container>
);

export default Home;
