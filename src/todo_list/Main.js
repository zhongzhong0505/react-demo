import React, { Component } from 'react';
import ToDoList from './ToDoList.js';
import ToDoInput from './ToDoInput.js'

class ToDoMain extends Component{
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
    handlerEnter(){
        debugger
    }
    addTodo(todo){
        this.state.todos.push({
            text:todo
        });
        this.setState({
            todos:this.state.todos
        })
    }
    render(){
        return (
            <div>
                <ToDoInput onEnter={this.handlerEnter.bind(this)} addTodo={this.addTodo.bind(this)}/>
                <ToDoList todos={this.state.todos} handlerDelete={this.handlerDelete.bind(this)} />
            </div>
        );
    }
}
export default ToDoMain;