import React, { useEffect, useState } from 'react';
import Photo from '../Photo';
import Container from 'react-bootstrap/Container';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import axios from 'axios';

const Blog = () => {
  let match = useRouteMatch();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts').then(response => {
      const photos = response.data;
      setPhotos(photos);
    });
  }, []);

  const removePostHandler = id => {
    console.log(id);

    axios
      .delete('http://localhost:3001/posts/' + id)
      .then(() => {
        return axios.get('http://localhost:3001/posts');
      })
      .then(response => {
        setPhotos(response.data);
      });
  };

  const photoList = photos.map(photo => {
    return (
      <div>
        <Card
          key={photo.id}
          bg="dark"
          text="white"
          className="mt-5"
          style={{ width: '18rem' }}
        >
          <Card.Body>
            <Card.Title>{photo.title}</Card.Title>
            <Card.Img variant="bottom" src={photo.img} alt={photo.title} />
            <Button variant="light" className="mt-3" block>
              <Link to={`${match.url}/${photo.id}`}>
                <div>Read more</div>
              </Link>
            </Button>
            <Button
              variant="light"
              className="mt-3"
              block
              onClick={removePostHandler.bind(this, photo.id)}
            >
              Delete this post
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
