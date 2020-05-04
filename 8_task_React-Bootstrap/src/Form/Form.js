import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FormPage = () => {
	return (
		<Container>
			<Form className="mt-5">
				<Form.Text className="mb-3">
					Fill in the form below to contact and send a message.
				</Form.Text>
				<Form.Group as={Row} controlId="formPlaintextEmail">
					<Form.Label column sm="2">
						Email to
					</Form.Label>
					<Col sm="10">
						<Form.Control plaintext readOnly defaultValue="example@example.fi" />
					</Col>
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter your email address here"
						size="sm"
					/>
				</Form.Group>

				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Message</Form.Label>
					<Form.Control
						as="textarea"
						rows="3"
						placeholder="Enter your message here"
						size="sm"
						type="text"
					/>
				</Form.Group>
				<Button variant="light" block type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default FormPage;
