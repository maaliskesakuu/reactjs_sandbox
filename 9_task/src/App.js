import React from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import NewPost from './NewPost/NewPost';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="/new_post">
						<NewPost />
					</Route>
				</Switch>
			</main>
			<Footer text="Tanja Lehtinen" year="2020"><FontAwesomeIcon icon={faHatCowboy} style={{ color: "#F1FAFF"}}></FontAwesomeIcon></Footer>
		</Router>
	);
};

export default App;
