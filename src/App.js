import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoMain from './todo_list/Main.js';
import classNames from 'classnames';
import styles from './button.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    console.log(styles);
    this.state = {
      isPressed: true
    };
  }
  handlerSubmit(e){
    e.preventDefault();
    const { value } = this.refs.name;
    console.log(value);
  }
  onClick(){
    this.setState({
      isPressed: !this.state.isPressed
    });
  }
  render() {
      const btnClass = classNames({
        'btn': true,
        'btn-pressed': this.state.isPressed ,
         btnPrimary:this.state.btnPrimary
      });
      return (
        <div className="App">
          <ToDoMain></ToDoMain>
          <form onSubmit={this.handlerSubmit}>
            <input ref="name" type="text" />
            <button type="submit" className={styles[btnClass]} onClick={this.onClick}>Submit</button>
          </form>
        </div>
      );
  }
}

export default App;
