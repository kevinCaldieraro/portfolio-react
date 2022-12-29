import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1.2rem 2rem;
`;

export const Logo = styled(Link)`
  flex: 1;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  text-decoration: none;
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
`;

export const Anchor = styled.a`
  text-decoration: none;
`;
