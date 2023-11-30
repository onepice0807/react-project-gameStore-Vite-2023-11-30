import './GameList.css';
import React from 'react';
import { GAMES } from '../../../data/Game';
import { useNavigate } from 'react-router-dom';

const GameList = () => {
  const navigate = useNavigate(); // useNavigate 함수를 사용합니다.

  const goToDetail = (gameId) => {
    navigate('/shop/detail/' + gameId);
  };

  return (
    <div className="game-list">
      <h1>Games</h1>
      <div className="game-grid">
        {GAMES.map((game) => (
          <div
            className="game-card"
            key={game.id}
            onClick={() => goToDetail(game.id)}
          >
            {/* 이미지 URL은 배열이라서 첫 번째 이미지를 대표 이미지로 사용 */}
            <img
              src={game.imageUrl[0]}
              alt={game.name}
              className="game-image"
            />
            <div className="game-info">
              <h3>{game.name}</h3>
              <p>{game.description}</p>
              <p>Price: ${game.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
