import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
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
    // setNewpost('');
  };

  return (
    <Container>
      <Form className="mt-5 mx-lg-5 px-lg-5">
        <h2 className="mb-3">Add a New Post</h2>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            id="title"
            onChange={changeValueHandler}
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
        </Form.Group>
        <Form.Group>
          <Form.Label>Short description</Form.Label>
          <Form.Control
            type="text"
            name="desc"
            id="desc"
            onChange={changeValueHandler}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            name="description"
            id="description"
            onChange={changeValueHandler}
          />
        </Form.Group>
        <Button
          variant="dark"
          block
          type="submit"
          className="mt-4"
          onClick={addPostHandler}
        >
          Add Post
        </Button>
      </Form>
    </Container>
  );
};

export default NewPost;
