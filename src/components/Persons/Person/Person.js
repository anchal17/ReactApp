import React from 'react';

const Person = (props) =>{
    return (
        <div>
        <p onClick={props.click}>I am {props.name} and my age is {props.age}.</p>
        <p>{props.children}</p>
        <input onChange= {props.changed} />
        </div>
    )
}

export default Person;
