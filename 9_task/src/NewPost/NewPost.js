import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const NewPost = () => {
  const [newPost, setNewpost] = useState({
    title: '',
    img: '',
    desc: '',
    description: '',
  });

  const changeValueHandler = e => {
    setNewpost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const addPostHandler = e => {
    e.preventDefault();

    axios.post('http://localhost:3001/posts', newPost).then(response => {
      console.log(response.data);
    });
  };

  return (
    <Container>
      <Col md={{ span: 8, offset: 2 }}>
        <Form className="pt-5" onSubmit={addPostHandler}>
          <h2 className="mb-5">Add a New Post</h2>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              id="title"
              onChange={changeValueHandler}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              name="img"
              id="img"
              onChange={changeValueHandler}
            />
            <Form.Text className="text-muted">
              e.g. https://source.unsplash.com/1600x900/?dog
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Short description</Form.Label>
            <Form.Control
              type="text"
              name="desc"
              id="desc"
              onChange={changeValueHandler}
            />
            <Form.Text className="text-muted">
              Add here a short description (for instance, a lead paragraph) of
              the post.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Content</Form.Label>
            <Form.Control
              type="text"
              name="description"
              id="description"
              onChange={changeValueHandler}
            />
            <Form.Text className="text-muted">
              Add here the actual text of the post.
            </Form.Text>
          </Form.Group>
          <Button
            variant="dark"
            type="submit"
            className="mt-4 mb-5"
            // onClick={addPostHandler}
            style={{ width: '25vw' }}
          >
            Add post
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default NewPost;
