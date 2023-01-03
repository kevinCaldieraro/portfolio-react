import React, { useState, useEffect } from 'react';

import { Container, Title, ProgressbarContainer, Progressbar, Form, Label, Input, Message, Button, Sending } from './style';

const Main = () => {
  const [control, setControl] = useState({nameControl: false, emailControl: false, messageControl: false})
  const [width, setWidth] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    
    fetch('https://api.sheetmonkey.io/form/cqz4b1uogro4siFfCkVxQH', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    }).then(() => {
      setSending(false)
      cleanFields();
    });
  };

  const cleanFields = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

  useEffect(() => {
    if(name.length >= 2 && control.nameControl === false) {
      setWidth(width + 33);
      setControl({...control, nameControl: true});
    } else if (name.length < 2 && control.nameControl === true) {
      setWidth(width - 33);
      setControl({...control, nameControl: false});
    }

    if(email.length >= 2 && control.emailControl === false) {
      setWidth(width + 33);
      setControl({...control, emailControl: true});
    } else if (email.length < 2 && control.emailControl === true) {
      setWidth(width - 33);
      setControl({...control, emailControl: false});
    }

    if(message.length >= 3 && control.messageControl === false) {
      setWidth(width + 34);
      setControl({...control, messageControl: true});
    } else if (message.length < 3 && control.messageControl === true) {
      setWidth(width - 34);
      setControl({...control, messageControl: false});
    }
  }, [width, control, name, email, message]);

  const BtnSubmit = () => {
    if (width === 100) {
      return <Button type="submit" enabled>Enviar</Button>
    } else{
      return <Button type="submit" disabled>Enviar</Button>
    }
  }

  if(sending) {
    return <Sending><p>Enviando...</p></Sending>;
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
            onChange={e => setName(e.target.value)}
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
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="message">Motivo do contato</Label>
          <Message
            name="message"
            id="message"
            placeholder="Mensagem"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        <BtnSubmit />
      </Form>
    </Container>
  );
};

export default Main;
