import React, { Component } from 'react';
import axios from 'axios';
import {withRouter, Redirect} from 'react-router-dom';

class PostDetail extends Component {
    constructor() {
        super();
        this.state = {
            post: null,
            authenticated: false,
        }
    }

    loadPost = () => {
        if (this.props.match.params.id) {
            if (!this.state.post || this.state.post.id !== Number(this.props.match.params.id))
                axios.get(`/posts/${this.props.match.params.id}`)
                    .then((response) => {
                        if (this.isMounted) {
                          this.setState({ post: response.data })
                        }
                    })
        }
    }

    componentDidMount = () => {
        this.loadPost();
    }

    componentDidUpdate = () => {
        this.loadPost();
    }

    handleSubmit = () => {
        console.log(this.props);
        this.props.history.push('/');
    }

    render() {
        let data = null;
        if (this.props.match.params.id) {
            if (!this.state.post || this.state.post.id !== this.props.match.params.id) {
                data = (<p>Loading...</p>)
            }
            if (this.state.post) {
                data = (<p>{this.state.post.body}</p>)
            }
        }
        let redirect = null;
        if (!this.state.authenticated) {
            redirect = (<Redirect to='/posts' />)
        }
        return (<>
            {redirect}
            {data}
            <button onClick={this.handleSubmit}>Submit</button>
        </>)
    }
}

export default withRouter(PostDetail);