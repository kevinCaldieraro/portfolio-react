import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 2rem;
  flex: 1;
  max-width: 800px;
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

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const Description = styled.p`
  line-height: 1.5rem;
  text-align: justify;
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

export const IllustrationHome = styled.img`
  width: 80%;
  max-width: 500px;
`;
