import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const classes = ['Backdrop',
    props.show === 'entering' ? 'BackdropOpen'
    : props.show === 'exiting' ? 'BackdropClosed' : null];
    return (
        <div className={classes.join(' ')}></div>
    );
}

export default backdrop;