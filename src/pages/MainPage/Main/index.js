import React from 'react';

import {
  Container,
  Title,
  Name,
  MainContent,
  Content,
  Description,
  SocialMedias,
  SocialMedia,
  IllustrationHome
} from './style';

import { ImGithub, ImLinkedin } from 'react-icons/im';

import illustrationHome from '../../../assets/images/homeImgs/illustrationHome.png';

const Main = () => (
  <Container>
    <MainContent>
      <Title>
        Olá! Eu sou <Name>Kevin Caldieraro</Name>. Desenvolvedor Frontend.
      </Title>
      <Description>
        Finalizei meu EMI Técnico em Informática no IFRS em 2021 e atualmente
        atuo como desenvolvedor Frontend. Minha maior motivação para estudar
        programação é saber que existem muitos problemas à serem resolvidos que
        podem ser automatizados com a tecnologia.
      </Description>
      <SocialMedias>
        <SocialMedia
          href="https://github.com/kevinCaldieraro"
          target="_blank"
          className="github"
        >
          <ImGithub size={35} />
        </SocialMedia>
        <SocialMedia
          href="https://github.com/kevinCaldieraro"
          target="_blank"
          className="linkedin"
        >
          <ImLinkedin size={35} />
        </SocialMedia>
      </SocialMedias>
    </MainContent>
    <Content>
      <IllustrationHome
        src={illustrationHome}
        alt="Boneco sentado em uma mesa com um computador"
      />
    </Content>
  </Container>
);

export default Main;
