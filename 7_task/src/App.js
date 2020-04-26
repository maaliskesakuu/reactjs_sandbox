import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import Content from './Content';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

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
      <Header />
      <Button click={addLikes} text="Like"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></Button>
			<Button click={addDislikes} text="Dislike"><FontAwesomeIcon icon={faHeartBroken}></FontAwesomeIcon></Button>
      <Button click={resetLikes} text="Reset" />
      <Content likes={likes} dislikes={dislikes}/>
		</div>
	);
};

export default App;

