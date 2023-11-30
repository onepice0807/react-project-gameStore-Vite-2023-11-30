import React, { useEffect, useState } from 'react';
import './GameList.css';
import axios from 'axios';

const GameListAxios = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/domain/games');
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching games', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="game-list">
      <h1>Games</h1>
      <div className="game-grid">
        {games.map((game) => (
          <div className="game-card" key={game.gameId}>
            <img src={game.imageUrl} alt={game.name} className="game-image" />
            <div className="game-info">
              <h3>{game.name}</h3>
              <p>{game.description}</p>
              <p>Price: ${game.price}</p>
              <p>
                Release Date: {new Date(game.releaseDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameListAxios;
