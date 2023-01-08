import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 2rem;
  flex: 1;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1150px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > blockquote {
    background: ${props => props.theme.colors.carbonDark};
    margin-bottom: 2rem;
    padding: 1rem;
    border-left: 5px solid ${props => props.theme.colors.carbon};

    & > p {
      font-size: 0.9rem;
      line-height: 1.3rem;
      text-align: justify;
    }

    & > p > i {
      margin: 0rem 0.35rem;
    }
  }

  @media screen and (min-width: 1150px) {
    width: 55%;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  font-size: 2.5rem;
  line-height: 3.3rem;

  @media screen and (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const Name = styled.span`
  background: linear-gradient(360deg, #8b5cf6 0%, #ec4899 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  line-height: 1.5rem;
  text-align: justify;
  margin-bottom: 2rem;
`;

export const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

export const SocialMedia = styled.a`
  transition: 0.3s;

  &.github:hover {
    color: #4c4545;
  }

  &.linkedin:hover {
    color: #0e76a8;
  }
`;

export const Content = styled.div`
  text-align: center;
  @media screen and (min-width: 1150px) {
    width: 45%;
    text-align: right;
  }
`;

export const IllustrationHome = styled.img`
  width: 80%;
  max-width: 400px;
`;
