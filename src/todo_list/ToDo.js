import React, { Component ,PropTypes} from 'react';
import './ToDo.css';

class ToDo extends Component{
    static contextTypes = {
        color: PropTypes.string
    };
    render(){
        return (
            <div className="item">{this.props.text}
                <button onClick={this.props.handlerDelete} style={{background:this.context.color}}>X</button>
            </div>
        );
    }
}

export default ToDo;