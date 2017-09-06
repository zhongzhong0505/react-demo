import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ToDo.css';

import 'bootstrap/dist/css/bootstrap.css';

import emitter from '../event/events';

const MyContainer = ToDo => 
    class extends Component {
        proc(todo){
            console.log(todo);
        }
        render() {
            const newProps = {
                text:'111',
                ref: this.proc.bind(this)
            };
            return <ToDo {...this.props} {...newProps } />
        }
    }

class ToDo extends Component {
    static contextTypes = {
        color: PropTypes.string
    };
    render() {
        return (
            <div className="item">{this.props.text}
                <button className='btn btn-primary' onClick={this.onClick.bind(this, this.props.id)} style={{ color: this.context.color }}>X</button>
            </div>
        );
    }
    onClick(id) {
        emitter.emit('delete', id);
    }
}

export default MyContainer(ToDo);