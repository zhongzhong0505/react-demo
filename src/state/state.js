import React, { Component } from 'react'

class State extends Component {

    constructor(props) {
        super(props);
        this.state = {
            val: 0
        };
    }
    componentDidMount(){
        this.setState({
            val: this.state.val+1
        });
        debugger
        console.log(this.state.val);
        this.setState({
            val: this.state.val+1
        });
        console.log(this.state.val);
        setTimeout(()=>{
            debugger
            console.log(this.state.val);
            this.setState({
                val: this.state.val+1
            });
            console.log(this.state.val);
            this.setState({
                val: this.state.val+1
            });
            console.log(this.state.val);
        },0);
    }
    render() {
        return null;
    }
}

export default State;