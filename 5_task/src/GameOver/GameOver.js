import React from 'react';
import './GameOver.css';

const closeHandler = () => {
  window.location.reload();
};

const GameOver = (props) => {
  return (
    <div className="overlay">
      <div className="gameOver"> 
        <h2>Game over</h2>  
        <p>You caught <span>{props.score}</span> sheep, well done</p>
        <img id="popupSheep" src="/sheep.svg" alt="a sheep"></img>
        <button id="game0verBtn" onClick={closeHandler}>Close</button>
      </div>
    </div>
  );
}

export default GameOver;
