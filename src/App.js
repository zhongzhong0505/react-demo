import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos : [{
        id:1,
        text:'aaa'  
      },{
        id:2,
        text:'bbb'
      }]
    };
  }
  handlerDelete(todo){
    var index = this.state.todos.findIndex(item=>item.id===todo.id);
    this.setState({
      todos:this.state.todos.splice(index,1) && this.state.todos
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ToDoList todos={this.state.todos} handlerDelete={this.handlerDelete.bind(this)}></ToDoList>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
