import React from 'react';

import { Container } from './style';

import Header from '../../components/Header';

const PortfolioPage = () => {
  const menuItems = [
    { name: 'Techs', type: 'Anchor' },
    { name: 'Projetos', type: 'Anchor' },
    { name: 'Contato', type: 'Link' }
  ];

  return (
    <Container>
      <Header menuItems={menuItems} />
    </Container>
  );
};

export default PortfolioPage;
