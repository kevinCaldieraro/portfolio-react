import React from 'react';

import { Container } from './style';

import Header from './Header';
import Main from './Main';
import Footer from '../../components/Footer';

const MainPage = () => (
  <Container>
    <Header />
    <Main />
    <Footer />
  </Container>
);

export default MainPage;
