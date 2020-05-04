import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


const NewPost = () => {
	return (
		<Container>
			<Form className="mt-5">
				<Form.Text className="mb-3">
					Add a New Post
				</Form.Text>
				<Form.Group>
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
					/>
        </Form.Group>
        <Form.Group>
					<Form.Label>Content</Form.Label>
					<Form.Control
						type="text"
					/>
        </Form.Group>
        <Form.Group>
					<Form.Label>Author</Form.Label>
					<Form.Control
						type="text"
					/>
				</Form.Group>
				<Button variant="light" block type="submit">
					Add Post
				</Button>
			</Form>
		</Container>
	);
};

export default NewPost;