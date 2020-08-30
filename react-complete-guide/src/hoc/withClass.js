import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
    <div className={className}>
        <WrappedComponent {...props} /> {/*Pass on props*/}
    </div>
    );
};

export default withClass;