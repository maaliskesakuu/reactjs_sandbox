import React from 'react';
import './Post.css';
import Posts from '../Posts';

const Post = props => {
  return (
    <div className="post_item">
      <div>
        <img src={props.img} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <Posts />
      </div>
    </div>
  );
};

export default Post;
