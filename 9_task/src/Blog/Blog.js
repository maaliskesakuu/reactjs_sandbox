import React, { useEffect, useState } from 'react';
import Photo from '../Photo';
import Container from 'react-bootstrap/Container';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card, { CardFooter } from 'react-bootstrap/Card';

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

	return (
		<Container className="mt-5">
			{photos.map((photo) => (
				<div key={photo.id}>
					<Card
						bg="dark"
						text="white"
						className="mt-5"
						style={{ width: '15rem' }}
					>
						<Card.Body>
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
			))}
		</Container>
	);
	// const photoList = () => {
	// 	return (
	// 		<Container className="mt-5">
	// 			{photos.map((photo) => (
	// 				<div key={photo.id}>
	// 					<Photo title={photo.title} thumbnailUrl={photo.thumbnailUrl} />
	// 					<Button>
	// 						<Link to={`${match.url}/${photo.id}`}></Link>Read more
	// 					</Button>
	// 				</div>
	// 			))}
	// 		</Container>
	// 	);
	// };

	// return (
	// 	<div>
	// 		<Switch>
	// 			<Route path="/blog/:photoId">
	// 				<Photo />
	// 			</Route>
	// 			<Route path={match.path}>
	// 				<Container>
	// 					<div>{photoList}</div>
	// 				</Container>
	// 			</Route>
	// 		</Switch>
	// 	</div>
	// );
};

export default Blog;
