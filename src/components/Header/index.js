import React from 'react';
import PropTypes from 'prop-types';
import { Container, Logo, LinkTo, Anchor } from './style';

const Header = ({ menuItems }) => {
  const menu = menuItems.map(({ name, type }, index) => {
    if (type === 'Link') {
      return (
        <LinkTo to={`/${name}`} key={name}>
          {name}
        </LinkTo>
      );
    }

    return (
      <Anchor href={`#${name}`} key={name}>
        {name}
      </Anchor>
    );
  });

  return (
    <Container>
      <Logo to="/">&lt;KC/&gt;</Logo>
      {menu}
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
