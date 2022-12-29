import React from 'react';
import { Container, Logo, PortfolioLink, ContactLink } from './style';

const Header = () => (
  <Container>
    <Logo to="/">&lt;KC/&gt;</Logo>
    <PortfolioLink to="/portfolio">Portfólio</PortfolioLink>
    <ContactLink>Contato</ContactLink>
  </Container>
);

export default Header;
