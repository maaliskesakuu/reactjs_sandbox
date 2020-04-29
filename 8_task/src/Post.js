import React from 'react';
import { Link, useParams } from 'react-router-dom';

import posts from './posts';

const Topic = () => {
	let { postId } = useParams();
	let post = posts.find((p) => p.title === postId)

	return (
		<div>
			<div>
				<img src={post.img} alt={post.title} />
			</div>

			<div>
				<h1>{post.title}</h1>
				<p>{post.desc}</p>
				<Link to="/blog">Back to blog page</Link>
			</div>
		</div>
	)
};



// const Post = () => {
// 	let { path, url } = useRouteMatch();
// 	return (
// 		<div>
// 			<ul className="read_mores">
// 				<li>
// 					<Link className="read_more" to={`${url}/Post`}>
// 						Read more
// 					</Link>
// 				</li>
// 			</ul>
// 			<Switch>
// 				<Route path={`${path}/:PostId`}>
// 					<Topic />
// 				</Route>
// 				<Route path={`${path}/blog`} component={Blog} />
// 			</Switch>
// 		</div>
// 	);
// };

export default Topic;
