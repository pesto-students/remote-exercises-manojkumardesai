import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import {
  CANVAS_SIZE,
  SNAKE_START,
  COIN,
  SCALE,
  SPEED,
  DIRECTIONS
} from "./Configuration";
import './App.css';

const App = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [coin, setCoin] = useState(COIN);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };

  const pauseGame = () => {
    setSpeed(speed ? null : 400);
  }

  const incrementScore = () => {
    setScore(score + 1);
  }

  const incrementSpeed = () => {
    if (speed > 200) {
      setSpeed(speed - 10);
    }
  }

  const moveSnake = ({ keyCode }) => {
    return keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);
  }
    

  const createApple = () => {
    return coin.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));
  }
    

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    ) {
      return true;
    }

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) {
        return true;
      }
    }
    return false;
  };

  const checkCoinCollision = newSnake => {
    if (newSnake[0][0] === coin[0] && newSnake[0][1] === coin[1]) {
      let newCoin = createApple();
      while (checkCollision(newCoin, newSnake)) {
        newCoin = createApple();
      }
      setCoin(newCoin);
      incrementScore();
      incrementSpeed();
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = [...snake];
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) {
      endGame();
    } else if (!checkCoinCollision(snakeCopy)) {
      snakeCopy.pop();
    };
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setCoin(COIN);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "lightblue";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "yellow";
    context.fillRect(coin[0], coin[1], 1, 1);
  }, [snake, coin, gameOver]);

  return (
    <div className="gameBoard" role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
      <div>
        <canvas
          className="gameBorder"
          ref={canvasRef}
          width={`${CANVAS_SIZE[0]}px`}
          height={`${CANVAS_SIZE[1]}px`}
        />
        {gameOver && <div>GAME OVER!</div>}
      </div>
      <div className="gameControls">
        <p>Score: {score}</p>
        <button onClick={startGame}> { gameOver ? 'Restart' : 'Start Game' }</button>
        { score ? 
          <button onClick={pauseGame}> {speed ? 'Pause' : 'Resume'} </button> :
          null
        }
      </div>
    </div>
  );
};

export default App;
