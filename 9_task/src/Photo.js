import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';

const Photo = ({ title, thumbnailUrl }) => {
	// let { photoId } = useParams();
	// let photo = photos.find((p) => p.title === postId);

	return (
		<div>
			<h3>{title}</h3>
			<img src={thumbnailUrl} alt="" />
			<Button variant="light">
				<Link to="/blog">
					<div>Back to blog page</div>
				</Link>
			</Button>
		</div>
	);
};

export default Photo;
