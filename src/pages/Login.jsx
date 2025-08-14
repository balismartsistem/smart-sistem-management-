// src/pages/Login.jsx
import React from 'react';
import { Card, Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login({ username, password, setUsername, setPassword, handleLogin }) {
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    handleLogin(e, navigate);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Container>
        <Card className="p-4 shadow">
          <Card.Title as="h2">Login ke SSM</Card.Title>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
