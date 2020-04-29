import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<div>
				<Link to="/">
					<logo>Tanja Lehtinen</logo>
					</Link>
			</div>
			<ul>
				<li>
					<Link to="/" exact>Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
