import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  HeaderS,
  Hamburguer,
  HamburguerLines,
  NavMenu,
  Logo,
  LinkTo,
  Anchor
} from './style';

const Header = ({ menuItems }) => {
  const [menuState, setMenuState] = useState('hidden');

  const toggleMenu = () => {
    if (menuState === 'hidden') {
      setMenuState('active');
    } else {
      setMenuState('hidden');
    }
  };

  const menu = menuItems.map(({ name, type }) => {
    if (type === 'Link') {
      return (
        <LinkTo to={`/${name}`} key={name}>
          {name}
        </LinkTo>
      );
    }

    return (
      <Anchor
        href={`#${name}`}
        key={name}
        onClick={() => setMenuState('hidden')}
      >
        {name}
      </Anchor>
    );
  });

  return (
    <Container>
      <HeaderS>
        <Logo to="/">&lt;KC/&gt;</Logo>
        <Hamburguer onClick={toggleMenu}>
          <HamburguerLines />
          <HamburguerLines />
          <HamburguerLines />
        </Hamburguer>
        <NavMenu className={menuState}>{menu}</NavMenu>
      </HeaderS>
    </Container>
  );
};

Header.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    }).isRequired
  )
};

export default Header;
