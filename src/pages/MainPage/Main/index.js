import React from 'react';

import {
  Container,
  Title,
  Name,
  Content,
  Description,
  SocialMedias,
  SocialMedia,
  IllustrationHome
} from './style';

import { ImGithub, ImLinkedin } from 'react-icons/im';

import illustrationHome from '../../../assets/images/illustrationHome.png';

const Main = () => (
  <Container>
    <Title>
      Olá! Eu sou <Name>Kevin Caldieraro</Name>. Desenvolvedor front-end.
    </Title>
    <Content>
      <Description>
        Finalizei meu EMI Técnico em Informática no IFRS em 2021 e atualmente
        estou estudando diariamente JS e ReactJS. Minha maior motivação para
        estudar programação é saber que existem muitos problemas à serem
        resolvidos que podem ser automatizados com a tecnologia.
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
      <IllustrationHome
        src={illustrationHome}
        alt="Boneco sentado em uma mesa com um computador"
      />
    </Content>
  </Container>
);

export default Main;
