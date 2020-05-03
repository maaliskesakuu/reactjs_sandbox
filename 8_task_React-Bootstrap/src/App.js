import React from 'react';
import Header from './Nav';
import Home from './Home/Home';
import About from './About';
import Blog from './Blog/Blog';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<Router>
			<Header />
			<main>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/blog">
						<Blog />
					</Route>
				</Switch>
			</main>
		</Router>
	);
};

export default App;
