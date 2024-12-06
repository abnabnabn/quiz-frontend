import React, { useState } from 'react';
import styled from 'styled-components';
import { createGame } from '../utils/api.ts';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Message = styled.h2`
  color: ${(props) => props.theme.primary};
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  background-color: ${(props) => props.theme.primary};
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

const CreateGameScreen: React.FC = () => {
  const [gameId, setGameId] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCreateGame = async () => {
    try {
      const response = await createGame('PlayerName');
      setGameId(response.gameId);
    } catch (error) {
      console.error('Error creating game', error);
    }
  };

  const handleStartGame = () => {
    navigate('/join-game');
  };

  return (
    <Container>
      <Message>Creating Game...</Message>
      {!gameId ? (
        <Button onClick={handleCreateGame}>Create Game</Button>
      ) : (
        <>
          <Message>Game Created! Game ID: {gameId}</Message>
          <Button onClick={handleStartGame}>Start Game</Button>
        </>
      )}
    </Container>
  );
};

export default CreateGameScreen;
