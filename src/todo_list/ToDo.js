import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component{
    render(){
        return (
            <div className="item">{this.props.text}
                <button onClick={this.props.handlerDelete}>X</button>
            </div>
        );
    }
}

export default ToDo;