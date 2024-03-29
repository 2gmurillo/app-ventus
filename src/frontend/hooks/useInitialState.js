import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    window
      .fetch(API)
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  return players;
};

export default useInitialState;
