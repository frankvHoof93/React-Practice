import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/authContext';

class Person extends Component {

  constructor() {
    super();
    this.inputElementRef = React.createRef();
  }

  // Automatically Injected. Has to be static and named this way
  static contextType = AuthContext;

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
    // Injected through contextType property;
    console.log('[Test]', this.context.authenticated);
  }

  render() {
    console.log(`[Person.js] rendering for ${this.props.name}`);
    // React.Fragment can also be used instead of Aux
    return (
      <Aux> 
        {/* <AuthContext.Consumer>
        {(context) => 
          context.authenticated ? <p>authenticated!</p> : <p>please log in</p>
        }
        </AuthContext.Consumer> */}
        {
          this.context.authenticated ? <p>authenticated!</p> : <p>please log in</p>
        }
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input 
          key="i3" 
          //ref={element => {this.inputElement = element}}
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} 
        />
      </Aux>
    );
    }
}

Person.propTypes = {
  click : PropTypes.func,
  name : PropTypes.string,
  age : PropTypes.number,
  changed : PropTypes.func
};

export default withClass(Person, classes.Person);
