import React from 'react';

const Content = ({ likes, dislikes }) => {
	if (likes === 0 && dislikes === 0) {
		return (
      <div>
				<h3>There are no likes or dislikes yet. Be the first one to give your review!</h3>
			</div>
		);
	}

	return (
    <div>
			<h1>Votes:</h1>
			<p>Likes: {likes}</p>
			<p>Dislikes: {dislikes}</p>
		</div>
	);
};

export default Content;
