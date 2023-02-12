import React from 'react';

import { Container, Title, GitHub } from './style';

import Techs from './Techs';
import Projects from './ProjectsComp';

import { ImGithub } from 'react-icons/im';

const Main = () => {
  return (
    <Container>
      <Title id="Techs">Tecnologias que utilizo</Title>
      <Techs />
      <Title id="Projetos">Projetos</Title>
      <Projects />
      <p>Mais projetos podem ser encontrados em meu GitHub.</p>
      <GitHub href="https://github.com/kevinCaldieraro" target="_blank">
        <ImGithub size={35} />
      </GitHub>
    </Container>
  );
};

export default Main;
