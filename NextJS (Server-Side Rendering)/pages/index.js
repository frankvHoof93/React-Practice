import Link from 'next/link';
import Router from 'next/router';

import React, { Component } from 'react'

class IndexPage extends Component {
    // Executes on server BEFORE rendering
    static getInitialProps(context) {
        console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: "Super App" })
            }, 1000);
        });
        return promise;
    }

    render() {
        return (
            <div>
                <h1>Main Page of {this.props.appName}</h1>
                <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')}>Go to Auth</button>
            </div>
        );
    }
}

export default IndexPage;
