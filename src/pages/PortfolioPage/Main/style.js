import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: 500;
  margin-bottom: 1.5rem;
  padding-top: 75px;
`;
