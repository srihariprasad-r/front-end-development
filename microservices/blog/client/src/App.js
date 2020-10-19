import React from 'react';
import PostCreate from './PostCreate';
import PostsLists from './PostsLists'

export default () => {
    return <div className="container">
        <h1>Create Post</h1>
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostsLists />
    </div>;
};