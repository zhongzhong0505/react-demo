import React , { Component } from 'react';
import ToDo from './ToDo.js';
class ToDoList extends Component{
    render(){
        const children = this.props.todos.map(todo=>
           <ToDo text={todo.text} key={todo.id} handlerDelete={this.props.handlerDelete.bind(this,todo)}></ToDo>
        );
        return (
            <div>{children}</div>
        );
    }
}

export default ToDoList;