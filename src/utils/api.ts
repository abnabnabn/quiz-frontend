// Mock POST request for creating a game
export const createGame = (name: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) {
        resolve({ gameId: Math.floor(Math.random() * 10000), message: 'Game Created Successfully' });
      } else {
        reject({ error: 'Failed to create game' });
      }
    }, 1000); // Simulate a network delay
  });
};

// Mock POST request for joining a game
export const joinGame = (name: string, gameId: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name && gameId) {
        resolve({ message: 'Joined Game Successfully' });
      } else {
        reject({ error: 'Failed to join game' });
      }
    }, 1000); // Simulate a network delay
  });
};
