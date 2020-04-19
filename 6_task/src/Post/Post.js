import React from 'react';
import './Post.css';

const Post = (props) => {
	return (
		<div className="card">
			<img src={props.img} alt={props.title} />
			<h2>{props.title}</h2>
			<p>{props.author}</p>
			<p>{props.description}</p>
      <button onClick={props.onclick}>Remove</button>
      <button
        className='like_container'
        onClick={props.likes}
      >Like</button>
      <p id="total">Total likes: {props.totalLikes}</p>	
		</div>
	);
};

export default Post;
