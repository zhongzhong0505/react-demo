import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class SelectInput extends Component {
    static displayName = 'SelectInput';
    
    render() {
        const { selectedItem, isActive, onClickHeader, placeholder } = this.props;
        const { text } = selectedItem;
        return (
            <div>
                <div onClick={onClickHeader}>
                    <div className="input-group">
                        <input type="text"
                            className="form-control"
                            placeholder={placeholder}
                            disabled
                            value={text} />
                        <span className="input-group-btn">
                            <button className="btn btn-default" onClick={this.toggleList} type="button">
                                <i className="glyphicon glyphicon-chevron-down" />
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectInput;