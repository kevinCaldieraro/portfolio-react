import React from 'react';

import { Container } from './style';

import Header from '../../components/Header';
import Main from './Main';
import Footer from '../../components/Footer';

const PortfolioPage = () => {
  const menuItems = [
    { name: 'Techs', type: 'Anchor' },
    { name: 'Projetos', type: 'Anchor' },
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

export default PortfolioPage;
