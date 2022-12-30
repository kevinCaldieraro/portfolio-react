import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  flex: 1;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: 500;
  margin-bottom: 1.5rem;
`;
