import React, {Component} from 'react';
import Aux from './../../../hoc/aux';
class Person extends Component{
    render(){
        return (
            <Aux>
            <div>
            <p onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age}.</p>
            <p>{this.props.children}</p>
            <input onChange= {this.props.changed} />
            </div>
            </Aux>
        )
    }
}

export default Person;
