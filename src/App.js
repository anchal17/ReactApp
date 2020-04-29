import React, { Component } from 'react';
import './App.css';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';
class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      {id:'asde1', name:'Anchal', Age:20},
      {id:'asd52', name:'Max', Age:22},
      {id:'asd24', name:'Ankiy', Age:23}
    ],
    showPersons:false,
    userInputValue: ''
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount...');
  }

  componentWillMount(){
    console.log('[App.js] componentWillMount...');
  }

  switchNameHandler = () =>{
    window.alert();
  }
  
  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id 
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons:persons} )
  }

  togglePersonHandler = () =>{
    const isShow = this.state.showPersons;
    this.setState({showPersons: !isShow})
  }

  deleteHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  calculateLength = (event) =>{
    this.setState({userInputValue:event.target.value})
  }

  render(){
    let persons = null;
    const style = {
      backgroundColor : 'red',
      borderColor:'white',
      border:'none',
      height:'20px'
    }
    if(this.state.showPersons){
      persons =
          <Persons 
          persons = {this.state.persons}
          clicked={this.deleteHandler}
          changed={this.nameChangedHandler}/>
      style.backgroundColor = 'green'
    }
    return (
      <div className="App">
        <Cockpit 
        title = {this.props.appTitle}
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        clicked={this.togglePersonHandler}/>
        {/* <h1>It's Me.</h1>
        <br/>
        <input type="text" onChange = {(event) => this.calculateLength(event)} value = {this.state.userInputValue}/>
        <p>{this.state.userInputValue}</p>
        <button style = {style} onClick={this.togglePersonHandler}>Click Me!</button> */}
          {persons}
      </div>
    );
  }
  
}

export default App;
