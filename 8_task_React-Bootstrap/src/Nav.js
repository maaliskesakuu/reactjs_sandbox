import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
	return (
		<Navbar bg="light" variant="light" expand="md">
			<LinkContainer to="/#">
				<Navbar.Brand>Tanja Lehtinen</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				<Nav>
					<LinkContainer to="/">
						<NavItem className="mr-5">Home</NavItem>
					</LinkContainer>
					<LinkContainer to="/about">
						<NavItem className="mr-5">About</NavItem>
					</LinkContainer>
					<LinkContainer to="/blog">
						<NavItem>Blog</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
