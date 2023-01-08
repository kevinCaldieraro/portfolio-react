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

import {
  ImGithub,
  ImLinkedin,
  ImQuotesLeft,
  ImQuotesRight
} from 'react-icons/im';

import illustrationHome from '../../../assets/images/homeImgs/illustrationHome.png';

const Main = () => (
  <Container>
    <MainContent>
      <Title>
        Olá! Eu sou <Name>Kevin Caldieraro</Name>. Desenvolvedor Frontend.
      </Title>
      <Description>
        Finalizei meu Ensino Médio integrado ao Técnico em Informática no IFRS
        (Instituto Federal do Rio Grande do Sul) em 2021 e atualmente atuo como
        desenvolvedor Frontend. O exercício da criatividade e da lógica para
        solucionar os problemas, além da criação de projetos, são os maiores
        motivos para eu gostar de atuar na área e ter muita vontade de estar
        sempre aprendendo.
      </Description>
      <blockquote cite="filme: À Procura da Felicidade">
        <p>
          <ImQuotesLeft size={15} />
          <i>
            Eu sou o tipo de pessoa que se você faz uma pergunta e eu não souber
            a resposta, eu vou dizer que não sei, mas eu aposto que eu sei achar
            a resposta e eu vou achar a resposta.
          </i>
          <ImQuotesRight size={15} />
        </p>
      </blockquote>
      <SocialMedias>
        <SocialMedia
          href="https://github.com/kevinCaldieraro"
          target="_blank"
          className="github"
        >
          <ImGithub size={35} />
        </SocialMedia>
        <SocialMedia
          href="https://www.linkedin.com/in/kevin-caldieraro-667393240/"
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
