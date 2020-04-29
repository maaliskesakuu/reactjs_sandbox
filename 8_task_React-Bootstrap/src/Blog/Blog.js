import React, { Component } from 'react';
import Post from '../Post/Post';
import './Blog.css';

const posts = [
	{
		id: 1,
		img: 'https://source.unsplash.com/featured/?cat',
		title: 'Lorem ipsum dolor sit amet',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui tellus, malesuada nec maximus sed, dignissim t purus.',
	},
	{
		id: 2,
		img: 'https://source.unsplash.com/featured/?dog',
		title: 'Lorem ipsum',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet feugiat metus, eget suscipit erat. Quisque volutpat dapibus risus, et dapibus sem mattis at.',
	},
	{
		id: 3,
		img: 'https://source.unsplash.com/featured/?sheep',
		title: 'Lorem ipsum dolor',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra, arcu et tincidunt vestibulum, tellus velit tincidunt leo, nec vestibulum dolor orci id tortor.',
	},
	{
		id: 4,
		img: 'https://source.unsplash.com/featured/?lamb',
		title: 'Lorem ipsum dolor sit',
		desc:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non justo enim. Proin nibh tortor, interdum ut magna vel, porta tristique lacus. Praesent eget facilisis sapien.',
	},
];

class Blog extends Component {
	state = {
		posts: posts,
	};

	render() {
		const postsList = this.state.posts.map((post) => {
			return (
				<Post
					key={post.id}
					img={post.img}
					title={post.title}
					desc={post.desc}
				/>
			);
		});

		return <div className="post_items">{postsList}</div>;
	}
}

export default Blog;
