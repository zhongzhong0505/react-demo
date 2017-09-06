import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ToDo.css';

import emitter from '../event/events';

class ToDo extends Component{
    static contextTypes = {
        color: PropTypes.string
    };
    render(){
        return (
            <div className="item">{this.props.text}
                <button onClick={this.onClick.bind(this,this.props.id)} style={{background:this.context.color}}>X</button>
            </div>
        );
    }
    onClick(id){
        emitter.emit('delete',id);
    }
}

export default ToDo;