import React from 'react';

import { Cards, Card, Name } from './style';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiBootstrap
} from 'react-icons/si';

const Techs = () => {
  const techs = [
    { name: 'HTML', color: '#e67e22', Icon: SiHtml5 },
    { name: 'CSS', color: '#8e44ad', Icon: SiCss3 },
    { name: 'JavaScript', color: '#f1c40f', Icon: SiJavascript },
    { name: 'ReactJS', color: '#3498db', Icon: SiReact },
    { name: 'styled-components', color: '#9b59b6', Icon: SiStyledcomponents },
    { name: 'Bootstrap', color: '#af79f0', Icon: SiBootstrap }
  ];

  const techCards = techs.map(({ name, color, Icon }) => (
    <Card borderColor={color} key={name}>
      <Icon color={color} size={50} />
      <Name color={color}>{name}</Name>
    </Card>
  ));

  return <Cards>{techCards}</Cards>;
};

export default Techs;
