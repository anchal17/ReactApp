import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[App.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('[App.js] componentDidUpdate');
    }

    render(){
        return this.props.persons.map((person, index) =>{
            return (
                <Person 
                click = {() => this.props.clicked(index)}
                name= {person.name} 
                age = {person.Age}
                key = {person.id}
                changed = { (event) => this.props.changed(event, person.id)}>
                </Person>
            )
        })
    }
}
export default Persons;