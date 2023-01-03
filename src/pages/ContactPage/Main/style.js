import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const ProgressbarContainer = styled.div`
  background: #fff;
  width: 100%;
  height: 15px;
  padding: 0 2px;
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  border-radius: 2px;
`;

export const Progressbar = styled.div`
  background: blue;
  width: ${props => props.width || 0};
  height: 11px;
  border-radius: 2px;
  transition: 0.5s;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.2rem 0.5rem;
  color: ${props => props.theme.colors.carbonDark};

  &::placeholder {
    color: ${props => props.theme.colors.metalDark};
  }
`;

export const Message = styled.textarea`
  width: 100%;
  padding: 0.3rem 0.5rem;
  color: ${props => props.theme.colors.carbonDark};
  resize: vertical;
  min-height: 150px;

  &::placeholder {
    color: ${props => props.theme.colors.metalDark};
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  align-self: center;
  border: none;
  border-radius: 3px;
  transition: 0.5s;

  &:disabled {
    cursor: not-allowed;
    color: ${props => props.theme.colors.metalDark};
    background: ${props => props.theme.colors.carbon};
  }

  &:enabled {
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.blue};

    &:hover {
      opacity: 0.7;
    }
  }
`;
