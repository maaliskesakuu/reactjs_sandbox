import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


const Header = () => {
	return (
		<Navbar bg="light" variant="light" expand="md" className="navbar px-5" sticky="top">
			<LinkContainer to="/#">
				<Navbar.Brand><FontAwesomeIcon icon={faHatCowboy}></FontAwesomeIcon></Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				<Nav>
					<LinkContainer to="/">
						<NavItem className="mr-5 link">Home</NavItem>
					</LinkContainer>
					<LinkContainer to="/blog">
						<NavItem className="mr-5 link">Blog</NavItem>
					</LinkContainer>
					<LinkContainer to="/new_post" className="link">
						<NavItem>New Post</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
