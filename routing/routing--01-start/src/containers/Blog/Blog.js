import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
//import NewPost from '../NewPost/NewPost';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost');
});

class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{ color: 'red' }}>
                                Posts
                            </NavLink></li>
                            <li><NavLink to={{
                                // Relative Pathing:
                                //pathname: this.props.match.url + '/new-post',
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/a">
                    <Posts />
                </Route>*/}
                <Switch>
                    <Route path="/new-post" component={AsyncNewPost} />
                    {/*<Redirect from="/posts" to="/" />*/}
                    <Route path="/" component={Posts} />
                    {/* LEAVE PATH EMPTY FOR 404*/}
                    <Route render={() => <h1>404 not found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;