import React, { useState } from 'react';
import styled from 'styled-components';
import { joinGame } from '../utils/api';

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

const JoinGameScreen: React.FC = () => {
  const [gameId, setGameId] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleGameIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/^[a-zA-Z0-9]*$/.test(input) || input === '') {
      setGameId(input);
      setError('');
    } else {
      setError('Invalid Game ID. Only alphanumeric characters are allowed.');
    }
  };

  const handleJoinGame = async () => {
    if (gameId) {
      try {
        await joinGame('PlayerName', gameId);
        alert('Joined game successfully!');
      } catch (error) {
        setError('Failed to join the game');
      }
    }
  };

  return (
    <Container>
      <h1>Join Game</h1>
      <Input
        type="text"
        value={gameId}
        onChange={handleGameIdChange}
        placeholder="Enter Game ID"
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button disabled={!gameId || !!error} onClick={handleJoinGame}>
        Join Game
      </Button>
    </Container>
  );
};

export default JoinGameScreen;
