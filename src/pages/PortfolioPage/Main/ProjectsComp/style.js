import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  font-size: ${props => props.theme.fontSizes.subtitle};
  font-weight: 500;
  margin-bottom: 0.8rem;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const View = styled.a`
  align-self: flex-start;
  margin-top: 1rem;
  padding: 0.3rem 1.5rem;
  text-decoration: none;
  background: ${props => props.theme.colors.link};
  border-radius: 5px;
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }
`;
