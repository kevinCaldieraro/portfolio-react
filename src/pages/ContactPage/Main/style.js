import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2rem;
  flex: 1;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const ProgressbarContainer = styled.div`
  background: ${props => props.theme.colors.carbonDark};
  width: 100%;
  height: 15px;
  padding: 0 2px;
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  border-radius: 2px;
`;

export const Progressbar = styled.div`
  background: ${props =>
    props.width === '100%'
      ? props.theme.colors.green
      : props.theme.colors.blue};
  width: ${props => props.width || 0};
  height: 11px;
  border-radius: 2px;
  transition: 0.5s;
`;

export const FormContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 1150px) {
    width: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SenderInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2.2rem;

  @media screen and (min-width: 650px) {
    flex-direction: row;
  }
`;

export const InputGroup = styled.div`
  width: 100%;

  @media screen and (min-width: 800px) {
    width: 50%;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 0.7rem;
  color: ${props => props.theme.colors.carbonDark};

  @media screen and (min-width: 1150px) {
    width: 100%;
  }

  &::placeholder {
    color: ${props => props.theme.colors.metalDark};
  }
`;

export const MessageDiv = styled.div`
  margin-bottom: 4rem;
`;

export const Message = styled.textarea`
  width: 100%;
  padding: 0.8rem 0.7rem;
  color: ${props => props.theme.colors.carbonDark};
  resize: vertical;
  min-height: 200px;

  &::placeholder {
    color: ${props => props.theme.colors.metalDark};
  }
`;

export const Button = styled.button`
  padding: 0.8rem 3rem;
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

export const Img = styled.img`
  width: 60%;

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
