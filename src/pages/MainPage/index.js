import React from 'react';

import { Container } from './style';

import Header from '../../components/Header';
import Main from './Main';
import Footer from '../../components/Footer';

const MainPage = () => {
  const menuItems = [
    { name: 'Portfólio', type: 'Link' },
    { name: 'Contato', type: 'Link' }
  ];

  return (
    <Container>
      <Header menuItems={menuItems} />
      <Main />
      <Footer />
    </Container>
  );
};

export default MainPage;
