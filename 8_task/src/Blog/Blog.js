import React from 'react';
import './Blog.css';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Topic from '../Post';
import posts from '../posts';

const Blog = () => {
	let match = useRouteMatch();
	const post = posts;

	const postsList = post.map((post) => {
		return (
			<div key={post.id} className="post_item">
				<img src={post.img} alt={post.title} />
				<div>
					<h2>{post.title}</h2>
					<p>{post.desc}</p>
					<Link to={`${match.url}/${post.title}`}>Read more</Link>
				</div>
			</div>
		);
	});

	return (
		<div>
			<Switch>
				<Route path="/blog/:postId">
					<Topic />
				</Route>
				<Route path={match.path}>
					<div className="post_items">{postsList}</div>
				</Route>
			</Switch>
		</div>
	);
};

export default Blog;
