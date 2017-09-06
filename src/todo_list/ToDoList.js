import React , { Component , PropTypes} from 'react';
import ToDo from './ToDo.js';
import './ToDoList.css';

class ToDoList extends Component{
    static childContextTypes = {
        color: PropTypes.string
    };
    getChildContext(){
        return {
            color:'red'
        };
    }
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