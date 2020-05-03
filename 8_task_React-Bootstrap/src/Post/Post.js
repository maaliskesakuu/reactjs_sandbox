import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import posts from '../posts';

const Topic = () => {
	let { postId } = useParams();
	let post = posts.find((p) => p.title === postId);

	return (
		<Container>
			<Row className="mt-5">
				<Col xs={4} sm={4}>
					<Image src={post.img} alt={post.title} thumbnail />
				</Col>

				<Col xs={8} sm={8}>
					<h2>{post.title}</h2>
					<p>{post.description}</p>
					<Button variant="light" block>
						<Link to="/blog">
							<div>Back to blog page</div>
						</Link>
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Topic;
