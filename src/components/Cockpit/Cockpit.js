import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    const assignedClass = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    }
    if (props.persons.length <=2){
        assignedClass.push(classes.red);
    }
    if(props.persons.length <=1){
        assignedClass.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
        <h1>It's React App.</h1>
        <p className={assignedClass.join( ' ')}> This is real</p>
        <button className={btnClass} onClick={props.clicked}>Click Me!</button>
        </div>
    )
};

export default Cockpit;