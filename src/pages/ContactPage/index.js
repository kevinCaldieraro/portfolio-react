import React from 'react';

import { Container } from './style';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from './Main';

const ContactPage = () => {
  const menuItems = [{ name: 'Portfólio', type: 'Link' }];

  return (
    <Container>
      <Header menuItems={menuItems} />
      <Main />
      <Footer />
    </Container>
  );
};

export default ContactPage;
