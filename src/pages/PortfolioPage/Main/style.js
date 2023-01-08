import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  flex: 1;
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  & > p {
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: 500;
  margin-bottom: 1.5rem;
  padding-top: 75px;
`;

export const GitHub = styled.a`
  align-self: center;
  margin-top: 0.8rem;
  transition: 0.3s;

  &:hover {
    color: #4c4545;
  }
`;
