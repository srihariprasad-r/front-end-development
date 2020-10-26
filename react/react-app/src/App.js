import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App  extends  Component{
  state = {
    persons : [
      {name: "ABC", age: 45},
      {name: "DEC", age: 88}
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // this.state.persons.persons[0].name = "ABD"  // ERROR!
    this.setState({
      persons : [
        {name: newName, age: 45},
        {name: "DEC", age: 48}
      ]
    })
  };


  changeNameHandler = (event) => {
    // this.state.persons.persons[0].name = "ABD"  // ERROR!
    this.setState({
      persons : [
        {name: event.target.value, age: 45},
        {name: "DEC", age: 48}
      ]
    })
  };

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render () {
    
    let displayperson = null

    if (this.state.showPersons) {
      displayperson = (
        <div>
              <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
              namechange={this.changeNameHandler}
              />
              <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this,'ABCD')}
              > 
              My hobbies: Racing 
              </Person>    
          </div> );
    };

  return (
    <div className="App">
      <h1>I am a React App</h1>
      <button onClick={this.toggleHandler}>Toggle Name</button>
      {displayperson}   
    </div>
  );
  }
};

export default App;
