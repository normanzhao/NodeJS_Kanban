import React, { Component } from 'react';
import Item from './Item.js';
import './styles.css';

export default class Container extends Component {
    render() {
        return (
            <div className={this.props.class + " container"} >
                <span className="titleText">{this.props.class.toUpperCase()}</span>
            </div>
        );
    };

}
// id="open" onDrop="drop(event)" onDragover="allowDrop"
// onDragstart="return false;" onDrop="false"
