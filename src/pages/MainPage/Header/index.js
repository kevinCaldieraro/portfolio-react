import React from 'react';
import { Container, Logo, PortfolioLink, ContactLink } from './style';

const Header = () => (
  <Container>
    <Logo>&lt;KC/&gt;</Logo>
    <PortfolioLink>Portfólio</PortfolioLink>
    <ContactLink>Contato</ContactLink>
  </Container>
);

export default Header;
