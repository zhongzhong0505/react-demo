import React , { Component } from 'react';
import PropTypes from 'prop-types';
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
    componentDidMount(){
        
    }
    render(){
        const children = this.props.todos.map((todo,index)=>
           <ToDo text={todo.text} id={todo.id} key={index} ></ToDo>
        );
        return (
            <div className="list">{children}</div>
        );
    }
}

export default ToDoList;