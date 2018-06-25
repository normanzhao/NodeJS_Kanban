import React, { Component } from 'react';
import './Container.css';

class Container extends Component {
    render() {
        return (
            <div className={this.props.class}>
                <span className="titleText">{this.props.class.toUpperCase()}</span>
            </div>
        );
    };

}
// id="open" onDrop="drop(event)" onDragover="allowDrop"
// onDragstart="return false;" onDrop="false"
export default Container