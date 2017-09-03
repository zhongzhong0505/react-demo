import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoMain from './todo_list/Main.js';

class App extends Component {
  
  render() {
      return (
        <div className="App">
          <ToDoMain></ToDoMain>
        </div>
      );
  }
}

export default App;
