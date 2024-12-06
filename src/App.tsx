// src/App.tsx
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { generateRandomName } from './nameGenerator';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import Home from './Home';
import CreateGameScreen from './CreateGameScreen';
import JoinGameScreen from './JoinGameScreen';

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home onToggleTheme={toggleTheme} />} />
          <Route path="/create-game" element={<CreateGameScreen />} />
          <Route path="/join-game" element={<JoinGameScreen />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
