import React from 'react';
import './Post.css';

const Post = props => {
  return (
    <div className="post_item">
      <div>
        <img src={props.img} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <p class="read_me">{props.link}</p>
      </div>
    </div>
  );
};

export default Post;
