import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';
import PostDetail from './PostDetail';
import { Route } from 'react-router-dom';

const defaultPost = {
    userId: 11,
    title: 'Test Title',
    body: 'Test Body'
}

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        }
    }

    componentDidMount = () => {
        axios.get('/posts')
            .then((response) => this.setState({ posts: response.data }));
    }

    createPostHandler = () => {
        axios.post('/posts', defaultPost)
        .then(response => console.log(response));
    }

    render() {
        const posts = this.state.posts.map(post => (<Post
            key={post.id}
            title={post.title}
            id={post.id}
        />))
        return (
            <>
                <Route path='/posts/:id' component={PostDetail} />
                <button onClick={this.createPostHandler}>Create Post</button>
                <div style={{textAlign: "center"}}>{posts}</div>
            </>
        )
    }
}

export default Posts;