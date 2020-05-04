import React from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import NewPost from './NewPost/NewPost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
		</Router>
	);
};

export default App;
