import React from 'react';
import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1>Auth Page of {props.appName}</h1>
        <User name="Henk" age={30} />
    </div>
);

authIndexPage.getInitialProps = (context) => {
    console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: "Super App (Auth)" })
            }, 1000);
        });
        return promise;
}

export default authIndexPage;