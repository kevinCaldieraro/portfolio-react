import React, { useState } from 'react';

import { Container, Title, Form, Label, Input, Message, Button } from './style';

const Main = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetch('https://api.sheetmonkey.io/form/cqz4b1uogro4siFfCkVxQH', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });
  };

  return (
    <Container>
      <Title>Contato</Title>
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
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export default Main;
