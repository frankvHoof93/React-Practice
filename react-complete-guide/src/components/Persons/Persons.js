import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    /* static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    } */

    /* shouldComponentUpdate(nextProps, nextState){
        // compare currProps to nextProps, etc..
        // Return True if component should update
        console.log('[Persons.js] shouldComponentUpdate');
        return nextProps.persons !== this.props.persons;
    } */

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount()
    {
        console.log('[Persons.js] componentWillUnmount');
    }

    render () {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
                return <Person
                    key={person.id}
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    changed={event => this.props.changed(event, person.id)}
                />
            })
    };
}

export default Persons;