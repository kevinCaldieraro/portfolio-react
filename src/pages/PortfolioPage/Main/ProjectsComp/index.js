import React from 'react';

import {
  Container,
  Card,
  Name,
  Images,
  Image,
  Description,
  View
} from './style';

import projects from './projects';

const Projects = () => {
  const projectCards = projects.map(({ name, description, link, imgs }) => (
    <Card key={name}>
      <Name>{name}</Name>
      <Images>
        <Image src={imgs[0]} />
        <Image src={imgs[1]} />
      </Images>
      <Description>{description}</Description>
      <View href={link} target="_blank">
        Ver
      </View>
    </Card>
  ));

  return <Container>{projectCards}</Container>;
};

export default Projects;
