import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Topic from '../Post/Post';
import posts from '../posts';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';

const Blog = () => {
	let match = useRouteMatch();
	const post = posts;

	const postsList = post.map((post) => {
		return (
			<div key={post.id}>
				<Card bg="dark" text="white" className="mt-5" border="secondary" style={{ width: '15rem' }}>
					<Card.Img variant="top" src={post.img} alt={post.title} />
					<Card.Body>
						<Card.Title>{post.title}</Card.Title>
						<Card.Text>{post.desc}</Card.Text>
						<Button variant="light" block>
							<Link to={`${match.url}/${post.title}`}>
								<div>Read more</div>
							</Link>
						</Button>
					</Card.Body>
				</Card>
			</div>
		);
	});

	return (
		<div>
			<Switch>
				<Route path="/blog/:postId">
					<Topic />
				</Route>
				<Route path={match.path}>
					<Container>
						<CardDeck>{postsList}</CardDeck>
					</Container>
				</Route>
			</Switch>
		</div>
	);
};

export default Blog;
