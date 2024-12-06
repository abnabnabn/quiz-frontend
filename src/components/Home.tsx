import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { generateRandomName } from '../utils/nameGenerator';
import Cookies from 'js-cookie';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 12px;
  border: 2px solid ${(props) => props.theme.border};
  margin: 20px;
  font-size: 18px;
  outline: none;
  width: 250px;
  transition: border-color 0.3s;
  &:focus {
    border-color: ${(props) => props.theme.focus};
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
  margin: 10px;
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.error};
  font-size: 14px;
`;

const Home: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = Cookies.get('name');
    if (savedName) {
      setName(savedName);
    } else {
      const randomName = generateRandomName();
      setName(randomName);
      Cookies.set('name', randomName);
    }
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/^[a-zA-Z0-9]*$/.test(input) || input === '') {
      setName(input);
      setError('');
      Cookies.set('name', input);
    } else {
      setError('Invalid name. Only alphanumeric characters are allowed.');
    }
  };

  const handleCreateGame = () => {
    if (name) {
      navigate('/create-game');
    }
  };

  const handleJoinGame = () => {
    if (name) {
      navigate('/join-game');
    }
  };

  return (
    <Container>
      <h1>Welcome to the Name Generator Game</h1>
      <Input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button disabled={!name || !!error} onClick={handleCreateGame}>
        Create Game
      </Button>
      <Button disabled={!name || !!error} onClick={handleJoinGame}>
        Join Game
      </Button>
    </Container>
  );
};

export default Home;
