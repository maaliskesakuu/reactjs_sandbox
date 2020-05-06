import React, { useEffect, useState } from 'react';
import Photo from '../Photo';
import Container from 'react-bootstrap/Container';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const Blog = () => {
	let match = useRouteMatch();
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		getPhotos();
	}, []);

	const getPhotos = async () => {
		const response = await fetch('//jsonplaceholder.typicode.com/photos');

		const data = await response.json();
		let newData = data.splice(1, 10);
		setPhotos(newData);
	};

	const photoList = photos.map((photo) => {
		return (
			<div>
				<Card
					bg="dark"
					text="white"
					className="mt-5"
					style={{ width: '18rem' }}
				>
					<Card.Body key={photo.id}>
						<Card.Title>{photo.title}</Card.Title>
						<Card.Img
							variant="bottom"
							src={photo.thumbnailUrl}
							alt={photo.title}
						/>
						<Button variant="light" className="mt-3">
							<Link to={`${match.url}/${photo.id}`}>
								<div>Read more</div>
							</Link>
						</Button>
					</Card.Body>
				</Card>
			</div>
		);
	});

	return (
		<Switch>
			<Route path="/blog/:photoId">
				<Photo />
			</Route>
			<Route path={match.path}>
				<Container>
					<CardDeck>{photoList}</CardDeck>
				</Container>
			</Route>
		</Switch>
	);
};

export default Blog;
