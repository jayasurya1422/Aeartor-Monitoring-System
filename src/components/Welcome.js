import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #c1c1c1, #d1d1d1);
  animation: ${fadeIn} 1.5s ease-in;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 40px;
  text-align: center;
  max-width: 600px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled(Link)`
  padding: 15px 30px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #666;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #444;
    transform: translateY(-2px);
  }
`;

const Welcome = () => {
  return (
    <WelcomeContainer>
      <Title>Welcome to the Aerator Monitoring System</Title>
      <Subtitle>
        Efficiently manage and monitor aerators in various ponds. View the status of aerators, monitor dissolved oxygen levels, and add new ponds and aerators.
      </Subtitle>
      <ButtonWrapper>
        <Button to="/login">Sign In</Button>
        <Button to="/register">Register</Button>
      </ButtonWrapper>
    </WelcomeContainer>
  );
};

export default Welcome;
