import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme.ts';
import Home from './components/Home.tsx';
import CreateGameScreen from './components/CreateGameScreen.tsx';
import JoinGameScreen from './components/JoinGameScreen.tsx';

const ThemeToggleContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  background-color: ${(props) => props.theme.primary};
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-game" element={<CreateGameScreen />} />
          <Route path="/join-game" element={<JoinGameScreen />} />
        </Routes>
        <ThemeToggleContainer>
          <Button onClick={toggleTheme}>Toggle Theme</Button>
        </ThemeToggleContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
