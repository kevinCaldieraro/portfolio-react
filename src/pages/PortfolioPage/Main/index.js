import React from 'react';

import {
  Container,
  Techs,
  Title,
  Cards,
  Card,
  Name,
  Projects,
  ProjectCards
} from './style';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiBootstrap
} from 'react-icons/si';

const Main = () => {
  const techs = [
    { name: 'HTML', color: '#e67e22', Icon: SiHtml5 },
    { name: 'CSS', color: '#8e44ad', Icon: SiCss3 },
    { name: 'JavaScript', color: '#f1c40f', Icon: SiJavascript },
    { name: 'ReactJS', color: '#3498db', Icon: SiReact },
    { name: 'styled-components', color: '#9b59b6', Icon: SiStyledcomponents },
    { name: 'Bootstrap', color: '#af79f0', Icon: SiBootstrap }
  ];

  const cards = techs.map(({ name, color, Icon }) => (
    <Card borderColor={color} key={name}>
      <Icon color={color} size={50} />
      <Name color={color}>{name}</Name>
    </Card>
  ));

  return (
    <Container>
      <Techs id="Techs">
        <Title>Tecnologias utilizadas</Title>
        <Cards>{cards}</Cards>
      </Techs>
      <Projects id="Projetos">
        <Title>Projetos</Title>
        <ProjectCards>
          <h3>Nome do projeto</h3>
          <p>Imagens</p>
          <p>Descrição</p>
        </ProjectCards>
      </Projects>
    </Container>
  );
};

export default Main;
