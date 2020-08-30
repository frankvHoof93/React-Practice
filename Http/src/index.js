import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// EXAMPLE ONLY. THIS IS NOT REQUIRED
axios.defaults.headers.post['Content-Type'] = 'application/json';

const requestInterceptor = axios.interceptors.request.use(request => {
    console.log('Request:');
    console.log(request)

    return request;
}, error => {
    console.log('[ERROR] Request:');
    console.log(error)
    return Promise.reject(error);
})

axios.interceptors.response.use(response => {
    console.log('Response:');
    console.log(response);
    return response;
}, error => {
    console.log('[ERROR] Response:');
    console.log(error);
    return Promise.reject(error);
})
// To Remove:
//axios.interceptors.request.eject(requestInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
