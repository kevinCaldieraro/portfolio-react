import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: ${props => props.theme.colors.dark};
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.2rem 2rem;
`;

export const Hamburguer = styled.button`
  background: transparent;
  border: none;
  height: 20px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  cursor: pointer;

  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const HamburguerLines = styled.div`
  height: 2px;
  width: 100%;
  background: #fff;
`;

export const NavMenu = styled.div`
  background: ${props => props.theme.colors.dark};
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  visibility: hidden;
  transition: 0.5s;

  &.active {
    visibility: visible;
    left: 0;
  }

  @media screen and (min-width: 500px) {
    background: transparent;
    position: relative;
    visibility: visible;
    left: 0;
    height: auto;
    width: auto;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`;

export const Logo = styled(Link)`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
`;

export const LinkTo = styled(Link)`
  font-size: 3rem;
  text-decoration: none;

  @media screen and (min-width: 500px) {
    font-size: ${props => props.theme.fontSizes.normal};
    transition: 0.5s;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Anchor = styled.a`
  font-size: 3rem;
  text-decoration: none;

  @media screen and (min-width: 500px) {
    font-size: ${props => props.theme.fontSizes.normal};
    transition: 0.5s;

    &:hover {
      opacity: 0.6;
    }
  }
`;
