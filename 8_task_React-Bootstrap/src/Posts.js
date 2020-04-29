import React from 'react';
import {
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from 'react-router-dom';
import About from './About';
import Button from 'react-bootstrap/Button';

const Posts = () => {
	let { path, url } = useRouteMatch();
	return (
		<div>
			<ul className="read_mores">
				{/* <li>
					<Link className="read_more" to={`${url}/Post1`}>
						Read more 1
					</Link>
				</li> */}
				{/* <li>
					<Link className="read_more" to={`${url}/Post2`}>Read more 2</Link>
				</li>
				<li>
					<Link className="read_more" to={`${url}/Post3`}>Read more 3</Link>
				</li>
				<li>
					<Link className="read_more" to={`${url}/Post4`}>Read more 4</Link>
				</li> */}
				<Button variant="dark" size="lg" block>
					{' '}
					<Link className="read_more" to={`${url}/Post1`}>
						Read more 1
					</Link>
				</Button>
			</ul>
			<Switch>
				<Route path={`${path}/:PostId`}>
					<Topic />
				</Route>
				<Route path={`${path}/about`} component={About} />
			</Switch>
		</div>
	);
};

const Topic = () => {
	let { PostId } = useParams();
	return { PostId };
};

export default Posts;
