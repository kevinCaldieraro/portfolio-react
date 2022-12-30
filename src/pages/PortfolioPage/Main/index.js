import React from 'react';

import { Container, Title } from './style';

import Techs from './Techs';
import Projects from './ProjectsComp';

const Main = () => {
  return (
    <Container>
      <Title id="Techs">Tecnologias utilizadas</Title>
      <Techs />
      <Title id="Projetos">Projetos</Title>
      <Projects />
    </Container>
  );
};

export default Main;
