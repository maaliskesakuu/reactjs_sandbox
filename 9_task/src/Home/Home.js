import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="text-center m-5">
          <h1>This is the homepage!</h1>
        </Col>
      </Row>
      <div
        style={{ display: 'grid', justifyItems: 'center', alignItems: "center" }}
      >
        <Image
          src="../sheep2.jpeg"
          alt="me feeding sheep"
          thumbnail
          className="mb-5 mx-5"
        />
      </div>
    </Container>
  );
};
export default Home;
