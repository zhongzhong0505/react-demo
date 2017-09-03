import React , { Component } from 'react';
import ToDo from './ToDo.js';
import './ToDoList.css';

class ToDoList extends Component{
    render(){
        const children = this.props.todos.map((todo,index)=>
           <ToDo text={todo.text} key={index} handlerDelete={this.props.handlerDelete.bind(this,todo)}></ToDo>
        );
        return (
            <div className="list">{children}</div>
        );
    }
}

export default ToDoList;