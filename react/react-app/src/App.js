import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App  extends  Component{
  render () {
  return (
    <div className="App">
      <h1>I am a React App</h1>
      <Person name="ABC" age="45"/>
      <Person name="DEC" age="88"> My hobbies: Racing </Person>
    </div>
  );
  }
};

export default App;
