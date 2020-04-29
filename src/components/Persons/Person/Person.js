import React, {Component} from 'react';

class Person extends Component{
    render(){
        return (
            <div>
            <p onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age}.</p>
            <p>{this.props.children}</p>
            <input onChange= {this.props.changed} />
            </div>
        )
    }
}

export default Person;
