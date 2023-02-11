import React, { useState } from 'react';

import {
  Container,
  FormContainer,
  Title,
  ProgressbarContainer,
  Progressbar,
  Form,
  SenderInfos,
  MessageDiv,
  InputGroup,
  Label,
  Input,
  Message,
  Button,
  Img
} from './style';

import img from '../../../assets/images/contactPageImgs/img0.svg';

const Main = () => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sended, setSended] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    const { name, email, message } = fields;

    fetch('https://api.sheetmonkey.io/form/cqz4b1uogro4siFfCkVxQH', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    }).then(() => {
      setSending(false);
      setSended(true);
      setTimeout(() => {
        setSended(false);
        cleanFields();
      }, 1500);
    });
  };

  const handleFields = ev => {
    const { name, value } = ev.target;
    setFields({ ...fields, [name]: value });
  };

  const cleanFields = () => {
    setFields({
      name: '',
      email: '',
      message: ''
    });
  };

  const width = () => {
    let width = 0;
    let pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (fields.name.length > 1) {
      width += 33;
    }
    if (fields.email.match(pattern)) {
      width += 33;
    }
    if (fields.message.length > 13) {
      width += 34;
    }

    return width;
  };

  return (
    <Container>
      <FormContainer>
        <Title>Contato</Title>
        <ProgressbarContainer>
          <Progressbar width={`${width()}%`} />
        </ProgressbarContainer>
        <Form onSubmit={handleSubmit}>
          <SenderInfos>
            <InputGroup className="nameGroup">
              <Label htmlFor="name">Remetente</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Nome"
                value={fields.name}
                onChange={ev => handleFields(ev)}
                disabled={sending || sended}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email@email.com"
                value={fields.email}
                onChange={ev => handleFields(ev)}
                disabled={sending || sended}
              />
            </InputGroup>
          </SenderInfos>
          <MessageDiv>
            <Label htmlFor="message">Assunto</Label>
            <Message
              name="message"
              id="message"
              placeholder="Mensagem"
              value={fields.message}
              onChange={ev => handleFields(ev)}
              disabled={sending || sended}
            />
          </MessageDiv>
          <Button type="submit" disabled={width() !== 100 || sending || sended}>
            {!sending && !sended && 'Enviar'}
            {sending && 'Enviando...'}
            {sended && 'Enviado!'}
          </Button>
        </Form>
      </FormContainer>
      <Img src={img} alt="" />
    </Container>
  );
};

export default Main;
