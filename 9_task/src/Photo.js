import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import axios from 'axios';

const Photo = () => {
  const [post, setPost] = useState();
  let { photoId } = useParams();

  useEffect(() => {
    if (!post) {
      axios.get('http://localhost:3001/posts/' + photoId).then(response => {
        setPost(response.data);
      });
    }
  });

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
      <Container key={post.id}>
        <Row className="mt-5">
          <Col xs={4} sm={4} md={4} lg={4}>
            <Image src={post.img} alt="post.title" thumbnail />
          </Col>

          <Col xs={8} sm={8} md={8} lg={8}>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <p>{post.description}</p>
            <Button variant="dark">
              <Link to="/blog">
                <div>Back to blog page</div>
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
  return postData;
};

export default Photo;
