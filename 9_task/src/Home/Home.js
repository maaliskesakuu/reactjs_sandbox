import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
	return (
		<Container fluid>
			<Row>
				<Col className="text-center m-5">This is the homepage!</Col>
			</Row>
		</Container>
	);
};
export default Home;
