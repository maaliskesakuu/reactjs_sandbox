import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';

const Photo = () => {
	const [post, setPost] = useState();
	let { photoId } = useParams();

	useEffect(() => {
		getPosts();
	});

	const getPosts = async () => {
		const response = await fetch(
			'//jsonplaceholder.typicode.com/photos/' + photoId
		);

		const data = await response.json();
		setPost(data);
	};

	let postData = undefined;

	if (photoId) {
		postData = (
			<Container className="mt-5 px-5">
				<Spinner animation="border" role="status" size="sm">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</Container>
		);
	}

	if (post) {
		postData = (
			<Container className="mt-5 px-5">
				<div key={post.title}>
					<h3>{post.title}</h3>
					<img src={post.thumbnailUrl} alt="" className="pr-5 py-5" />
					<Button variant="light">
						<Link to="/blog">
							<div>Back to blog page</div>
						</Link>
					</Button>
				</div>
			</Container>
		);
	}
	return postData;
};

export default Photo;
