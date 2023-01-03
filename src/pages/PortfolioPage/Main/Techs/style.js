import styled from 'styled-components';

export const Cards = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media screen and (min-width: 470px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: 650px) {
    gap: 1.5rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: 850px) {
    gap: 3rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  border: 2px solid ${props => props.borderColor || '#fff'};
  border-radius: 15px;
  padding: 0.8rem;
`;

export const Name = styled.p`
  color: ${props => props.color || '#fff'};
`;
