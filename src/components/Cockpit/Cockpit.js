import React, {useEffect} from 'react';
import classes from './Cockpit.css';


//whenever any update occurs useEffect works
const Cockpit = (props) => {
    console.log('[App.js] Cockpit');
    useEffect(() => {
        setTimeout(()=>{
            alert('data saved');
        }, 1000)
    }, props.persons.js)
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
        <h1>{props.title}</h1>
        <p className={assignedClass.join( ' ')}> This is real</p>
        <button className={btnClass} onClick={props.clicked}>Click Me!</button>
        </div>
    )
};

export default Cockpit;