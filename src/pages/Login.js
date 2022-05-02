import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault(); // 페이지가 계속 refresh 하는 것을 막아줌
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container className="login-area">
      <Form className="login-form" onSubmit={(event) => login(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
