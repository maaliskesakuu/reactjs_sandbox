import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Home.css';

const Home = () => {
  return (
    <Container fluid style={{ minHeight: '80vh' }}>
      <Row>
        <Col className="text-center mt-5 mb-5">
          <h1>Welcome to my animal blog!</h1>
        </Col>
      </Row>
      <Row
        style={{
          display: 'grid',
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        <Link to="/blog">
          <Image
            src="../sheep2.jpeg"
            alt="me feeding sheep"
            thumbnail
            className="lambs"
            style={{ maxWidth: '18rem', padding: '0', border: 'none' }}
          />
        </Link>
      </Row>
      <Row>
        <Col>
          <p className="text-center m-5">
            Click the picture to see my blog posts.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
