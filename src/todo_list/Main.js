import React, { Component } from 'react';
import ToDoList from './ToDoList.js';
import ToDoInput from './ToDoInput.js'
import emitter from '../event/events';

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
        emitter.on('delete',id=>{
            var index = this.state.todos.findIndex(item=>item.id===id);
            this.setState({
                todos:this.state.todos.splice(index,1) && this.state.todos
            });
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
                <ToDoList todos={this.state.todos}  />
            </div>
        );
    }
}
export default ToDoMain;