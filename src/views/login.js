import React, { useState } from 'react';
import client from '../client';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    client
      .post('/auth/login', {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        history.push('/questions');
        props.setIsLogged(true);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleEmailChange}
            type="email"
            required
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handlePasswordChange}
            type="password"
            required
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
