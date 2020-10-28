import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App  extends  Component{
  state = {
    persons : [
      {id: 'abcd', name: "ABC", age: 45},
      {id: 'defg',name: "DEC", age: 88}
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

  deleteNameHandler = (index) => {
    //slice() will take a copy of orginal element and will avoid mutating the state
    const deletedpersonlist = this.state.persons.slice()
    deletedpersonlist.splice(index,1);
    this.setState({persons:deletedpersonlist})
  };


  changeNameHandler = (event, id) => {
    const pIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const p1 = Object.assign({},this.state.persons[pIndex]);

    p1.name = event.target.value;

    const personLists = [...this.state.persons];    // fixed error here and changed it to arrays instead of objects as MAP function was failing!
    personLists[pIndex] = p1;

    // this.state.persons.persons[0].name = "ABD"  // ERROR!
    this.setState({
      persons : personLists
    })
  };

  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render () {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit'
    }
    
    let displayperson = null

    if (this.state.showPersons) {
      displayperson = (
        <div>
          {this.state.persons.map((pson, index) => {
            return <Person
              click={() => this.deleteNameHandler(index)}
              name={pson.name}
              age={pson.age}
              key={pson.id}
              namechange={(event) => this.changeNameHandler(event, pson.id)} />            
          })
          }
        </div> 
      );

      style.backgroundColor = 'red';
    };

  let cssclasses = [];
  if (this.state.persons.length <= 1 ) {
    cssclasses.push('red')
  }  
  if (this.state.persons.length < 1 ) {
    cssclasses.push('bold')
  }

  return (
    <div className="App">
      <h1>I am a React App</h1>
      <p className={cssclasses.join(" ")}>This is for css styling!</p>
      <button style={style} onClick={this.toggleHandler}>Toggle Name</button>
      {displayperson}   
    </div>
  );
  }
};

export default App;
