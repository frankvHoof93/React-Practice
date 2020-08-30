import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Course extends Component {
    render () {
        let title = <h1>_COURSE_TITLE</h1>

        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        
        for (let param of query.entries())
        {
            console.log(param);
            if (param[0] === 'title')
            {
                title = <h1>{param[1]}</h1>;
            }
        }
        return (
            <div>
                {title}
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default withRouter(Course);