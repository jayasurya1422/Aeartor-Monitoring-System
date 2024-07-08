import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #c1c1c1, #d1d1d1);
`;

const FormWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 1s ease-out;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
  position: relative;

  &::after {
    content: '';
    width: 60px;
    height: 4px;
    background: #666;
    display: block;
    margin: 10px auto 0;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #999;
  border-radius: 5px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #666;
    box-shadow: 0 0 0 3px rgba(102, 102, 102, 0.2);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #666;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #444;
    transform: translateY(-2px);
  }
`;

const RegisterLink = styled.p`
  margin-top: 15px;
  text-align: center;
  color: #666;
  font-size: 1rem;

  a {
    color: #444;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #222;
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login logic; replace with actual login API call
    console.log('Logging in with:', email, password);
    // On successful login
    navigate('/dashboard');
  };

  return (
    <LoginContainer>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Title>Login</Title>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Login</Button>
          <RegisterLink>
            Don't have an account? <a href="/register">Register</a>
          </RegisterLink>
        </Form>
      </FormWrapper>
    </LoginContainer>
  );
};

export default Login;
