import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ContactPage = () => {
  const menuItems = [{ name: 'Portfólio', type: 'Link' }];
  return (
    <div>
      <Header menuItems={menuItems} />
      <main>Texto main</main>
      <Footer />
    </div>
  );
};

export default ContactPage;
