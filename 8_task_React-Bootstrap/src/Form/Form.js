import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const FormPage = () => {
	return (
		<Container> 
			<Form className="mt-5 mx-lg-5 px-lg-5">
				<p>Fill in the form below to contact and to send a message.</p>
				<Form.Group controlId="formBasicEmail" className="mt-5">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter your email"
					/>
				</Form.Group>
				<Form.Control
					plaintext
					readOnly
					defaultValue="e.g. example@example.fi"
					className="text-muted mb-3 pl-3"
				/>
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Message</Form.Label>
					<Form.Control
						as="textarea"
						rows="3"
						placeholder="Enter your message"
						type="text"
						className="mb-3"
					/>
				</Form.Group>
				<Button variant="light" text="blue" block type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default FormPage;
