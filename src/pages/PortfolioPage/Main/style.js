import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  flex: 1;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Techs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: 500;
`;

export const Cards = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: 650px) {
    gap: 2.5rem;
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
  border-radius: 5%;
  padding: 0.8rem;
`;

export const Name = styled.p`
  color: ${props => props.color || '#fff'};
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectCards = styled.div`
  display: grid;
`;
