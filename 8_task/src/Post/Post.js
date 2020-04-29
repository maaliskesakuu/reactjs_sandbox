import React from 'react';
import './Post.css'
import { Link, useParams } from 'react-router-dom';

import posts from '../posts';

const Topic = () => {
	let { postId } = useParams();
	let post = posts.find((p) => p.title === postId)

	return (
		<div className="blog_posts">
			<div className="blog_item">
				<img src={post.img} alt={post.title} className="blog_item_img"/>
			</div>

			<div className="blog_item blog_item_text">
				<h2>{post.title}</h2>
				<p>{post.desc}</p>
				<Link to="/blog"><div className="return">Back to blog page</div></Link>
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
