import React, { Component } from 'react';

class LifeCycle extends Component {
    state = {
        color:this.props.color
    }
    render() {
        console.log('render');
        return (
            <div>
                <h1 style={{color:this.props.color}}>
                    props : {this.props.color} <br />
                    state : {this.state.color}
                </h1>
            </div>
        );
    }
}

export default LifeCycle;