import React from 'react';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Post = props => {
	return (
		<div className="card">
			<img src={props.img} alt={props.title} />
			<h2>{props.title}</h2>
			<p>{props.author}</p>
			<p>{props.description}</p>
			<button className="like_container" onClick={props.clicklikes}><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
			</button>
			<p>Likes: {props.likes}</p>
			<button class="trash" onClick={props.onclick}>
				<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default Post;
