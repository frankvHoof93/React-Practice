import React from 'react';
import './UserOutput.css';

const userOutput = props => {
    return (
        <div className='Output'>
            <h2 className='NameHeader'>{props.username}</h2>
            <p>Lorem Ipsum</p>
            <p>Dolor Sit Amet</p>
        </div>
    );
}

export default userOutput;