import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/authContext';

const cockpit = (props) => {
    
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

    // Runs when component updates. 
    useEffect(() =>{
      console.log('[Cockpit.js] UseEffect');
      // Http request...
      const timer = setTimeout(() => {
       // alert('saved data to cloud');
       // Done here to show effect in browser
        toggleBtnRef.current.click();
      }, 2000);
      // This works here, because the function runs AFTER render returns
      //toggleBtnRef.current.click();
      return () => {
        clearTimeout(timer);
        console.log('[Cockpit.js] Cleanup UseEffect');
      }
    }, [props.persons]); // Run only on changes in this dependency

    useEffect(() => {
      // alert('initial run');
    }, []); // Empty dependency means it only runs the first time (dependency never changes)

    useEffect(() => {
      console.log('[Cockpit.js] 2nd UseEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd UseEffect')
      }
    });

    let btnClass = '';
    if (props.showPersons) {
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
            {/* <AuthContext.Consumer>
              {(context) => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
};

export default React.memo(cockpit);