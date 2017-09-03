import React, { Component } from 'react';

class ToDoInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo:''
        };
    }
    handlerChange(e){
        this.setState({
            todo:e.target.value
        });
    }
    render(){
        return (
            <div>
                <input type="text" placeholder="请输入..." onChange={this.handlerChange.bind(this)}></input>
                <button onClick={this.props.addTodo.bind(null,this.state.todo)}>添加</button>
            </div>
        );
    }
}
export default ToDoInput;