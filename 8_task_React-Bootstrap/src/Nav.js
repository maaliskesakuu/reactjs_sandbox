import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Navbar.Brand href="#">Tanja Lehtinen</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				<Nav>
					<Nav.Link href="#">Home</Nav.Link>

					<Nav.Link href="#about">About</Nav.Link>

					<Nav.Link href="#blog">Blog</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
