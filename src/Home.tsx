// src/Home.tsx
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { generateRandomName } from './nameGenerator';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Input = styled.input`
  padding: 10px;
  border: 3px solid ${(props) => props.theme.border};
  border-radius: 12px;
  font-size: 16px;
  width: 300px;
  margin-bottom: 20px;
  outline: none;
  &:focus {
    border-color: ${(props) => props.theme.focus};
    box-shadow: 0 0 5px ${(props) => props.theme.focus};
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  background-color: ${(props) => props.theme.primary};
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.hover};
  }
`;

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.error};
  font-size: 14px;
  margin-top: -15px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Home: React.FC<{ onToggleTheme: () => void }> = ({ onToggleTheme }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = Cookies.get('userName');
    if (storedName) {
      setName(storedName);
    } else {
      setName(generateRandomName());
    }
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      setName(value);
      setError('');
      Cookies.set('userName', value);
    } else {
      setError('Name must be alphanumeric only!');
    }
  };

  return (
    <Container>
      <h1>Game Name Generator</h1>
      <Input
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button
        disabled={!name || !!error}
        onClick={() => navigate('/create-game')}
      >
        Create Game
      </Button>
      <Button
        disabled={!name || !!error}
        onClick={() => navigate('/join-game')}
      >
        Join Game
      </Button>
      <Button onClick={onToggleTheme}>Toggle Theme</Button>
    </Container>
  );
};

export default Home;
