import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Button = ({ click, text, children }) => {
	return (
		<>
      <button onClick={click}>{text} {children}</button>
		</>
	);
};

const Content = () => {
  return (
    <div>
      <h1>Votes:</h1>
      <p>Likes:</p>
      <p>Dislikes:</p>
    </div>
  )
}

const App = () => {
	const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

	const addLikes = () => setLikes(likes + 1);
  const addDislikes = () => setDislikes(dislikes + 1);
  const resetLikes = () => {
    setLikes(0);
    setDislikes(0);
  }

	return (
		<div className="box">
      <Button click={addLikes} text="Like"><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></Button>
			<Button click={addDislikes} text="Dislike"><FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon></Button>
      <Button click={resetLikes} text="Reset" />
      <h1>Votes:</h1>
      <p>Likes: {likes}</p>
      <p>Dislikes: {dislikes}</p>
      {/* <Content/> */}
		</div>
	);
};

export default App;

