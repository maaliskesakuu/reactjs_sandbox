import React, { useState, useEffect } from "react";
import axios from 'axios';

import PostCard from "../PostCard/PostCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import FullPost from "../FullPost/FullPost";

const Blog = () => {
  const [post, setPost] = useState([]);
  let match = useRouteMatch();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((response) => {
      const posts = response.data.slice(0, 10);
      setPost(posts)
    });
  }, []);

  const PostList = post.map((p) => {
    return (
      <PostCard
        key={p.id}
        title={p.title}
        desc={p.desc}
        img={p.thumbnailUrl}
        link={`${match.url}/${p.id}`}
      />
    );
  });

  return (
    <>
      <Switch>
        <Route path="/blog/:postId">
          <FullPost />
        </Route>
        <Route path={match.path}>
          <div>
            <h1>Blog</h1>
            {PostList}
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Blog;
