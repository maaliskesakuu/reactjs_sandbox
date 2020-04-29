import React from 'react';
import './App.css';
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
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/blog" component={Blog} />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
