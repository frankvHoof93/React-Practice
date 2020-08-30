import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
//import axios from 'axios';
import axios from '../../axios';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 6);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                //console.log(response);
                this.setState({ posts: updatedPosts });
            })
            .catch(error => this.setState({ error: true }));
    }

    selectPostHandler = (id) => {
        //console.log('selected', id);
        this.setState({ selectedPostId: id });
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>An Error Occurred</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post key={post.id} title={post.title} author={post.author} clicked={() => this.selectPostHandler(post.id)} />
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;