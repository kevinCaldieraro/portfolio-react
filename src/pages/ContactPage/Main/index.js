import React, { useState } from 'react';

import { Container, Title, ProgressbarContainer, Progressbar, Form, Label, Input, Message, Button } from './style';

const Main = () => {
  const [control, setControl] = useState({nameControl: false, emailControl: false, messageControl: false})
  const [width, setWidth] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetch('https://api.sheetmonkey.io/form/cqz4b1uogro4siFfCkVxQH', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });
  };

  const checkFields = (fieldName, e) => {
    if(fieldName === 'name') {
      setName(e.target.value)
      if(name.length >= 1 && control.nameControl === false) {
        setWidth(width + 33);
        setControl({...control, nameControl: true});
      } else if (name.length === 1){
        setWidth(width - 33);
        setControl({...control, nameControl: false});
      }
    }

    if(fieldName === 'email') {
      setEmail(e.target.value)
      if(email.length >= 1 && control.emailControl === false) {
        setWidth(width + 33);
        setControl({...control, emailControl: true});
      } else if (email.length === 1){
        setWidth(width - 33);
        setControl({...control, emailControl: false});
      }
    }

    if(fieldName === 'message') {
      setMessage(e.target.value)
      if(message.length >= 1 && control.messageControl === false) {
        setWidth(width + 34);
        setControl({...control, messageControl: true});
      } else if (message.length === 1){
        setWidth(width - 34);
        setControl({...control, messageControl: false});
      }
    }
  }

  const BtnSubmit = () => {
    if (width === 100) {
      return <Button type="submit" enabled>Enviar</Button>
    } else {
      return <Button type="submit" disabled>Enviar</Button>
    }
  }

  return (
    <Container>
      <Title>Contato</Title>
      <ProgressbarContainer>
        <Progressbar width={`${width}%`} />
      </ProgressbarContainer>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name">Insira seu nome</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            value={name}
            onChange={e => checkFields('name', e)}
          />
        </div>
        <div>
          <Label htmlFor="email">Insira seu email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={e => checkFields('email', e)}
          />
        </div>
        <div>
          <Label htmlFor="message">Motivo do contato</Label>
          <Message
            name="message"
            id="message"
            placeholder="Mensagem"
            value={message}
            onChange={e => checkFields('message', e)}
          />
        </div>
        <BtnSubmit />
      </Form>
    </Container>
  );
};

export default Main;
