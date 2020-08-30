import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        this.loadData();
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            console.log(param); // yields ['start', '5']
        }

        if (this.props.match.params.id) {
            if (!this.state.loadedPost || 
                (this.state.loadedPost && 
                    // != instead of !== to break infinite loop (one is string, other number)
                    // eslint-disable-next-line
                    this.state.loadedPost.id != this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        console.log(response);
                        this.setState({ loadedPost: response.data });
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    render() {
        console.log(this.props);
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;