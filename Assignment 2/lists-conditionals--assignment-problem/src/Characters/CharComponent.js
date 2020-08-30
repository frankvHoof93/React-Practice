import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
        <div className='CharBox' onClick={props.delete}>
            {props.char}
        </div>
    );
}

export default charComponent;