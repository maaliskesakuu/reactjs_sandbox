import React, { useEffect, useState } from 'react';
import Photo from '../Photo';
import Container from 'react-bootstrap/Container';

const Blog = () => {
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
				<Photo key={photo.id} title={photo.title} thumbnailUrl={photo.thumbnailUrl} />
			))}
		</Container>
	);
};

export default Blog;
