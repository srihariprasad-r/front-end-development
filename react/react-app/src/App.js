import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App  extends  Component{
  state = {
    persons : [
      {name: "ABC", age: 45},
      {name: "DEC", age: 88}
    ]
  };

  switchNameHandler = () => {
    // this.state.persons.persons[0].name = "ABD"  // ERROR!
    this.setState({
      persons : [
        {name: "ABD", age: 45},
        {name: "DEC", age: 48}
      ]
    })
  };

  render () {
  return (
    <div className="App">
      <h1>I am a React App</h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Racing </Person>
    </div>
  );
  }
};

export default App;
