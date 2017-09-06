import React, { Component } from 'react';

class SelectList extends Component{
    render(){
        const lis = this.props.data.map(li=>{
            return <li >li.text</li>
        });
        return <ul>{lis}</ul>
    }
}
export default SelectList;