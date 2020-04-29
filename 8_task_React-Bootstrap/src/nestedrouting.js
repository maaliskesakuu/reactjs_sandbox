import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/courses">Courses</Link>
				</li>
			</ul>
		</nav>
	);
};

const Home = () => {
	return <h1>This is the HOME page</h1>;
};

const About = () => {
	return <h1>This is the ABOUT page</h1>;
};

const Courses = () => {
	let { path, url } = useRouteMatch();
	return (
		<div>
			<h1>This is the COURSES page</h1>

			<ul>
				<li>
					<Link to={`${url}/html&css`}>HTML and CSS</Link>
				</li>
				<li>
					<Link to={`${url}/UIprototyping`}>UI prototyping</Link>
				</li>
				<li>
					<Link to={`${url}/reactbasics`}>React Basics</Link>
				</li>
			</ul>
			<Switch>
				<Route path={`${path}/about`} component={About} />
				<Route path={`${path}/:CourseId`}>
					<Topic />
				</Route>
			</Switch>
		</div>
	);
};

const Topic = () => {
	let { CourseId } = useParams();

	return <h1>This is the page for {CourseId}</h1>;
};

const Nestedrouting = () => {
	return (
		<Router>
			<Nav />
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/courses" component={Courses} />
				</Switch>
			</main>
		</Router>
	);
};

export default Nestedrouting;
