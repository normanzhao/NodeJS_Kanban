import React, { Component } from 'react';
import './styles.css';

export default class Item extends Component {
    render() {
        let priority = ["fas fa-angle-double-down", "fas fa-angle-down", "far fa-circle", "fas fa-angle-up", "fas fa-angle-double-up"][parseInt(this.props.priority,10) + 2];
        let type = { Story: "fas fa-book", Feature: "fas fa-exclamation", Request: "fas fa-question", Bug: "fas fas fa-bug", Epic: "fas fa-bolt" }[this.props.type];
        return (
            <div className='Item'>
                <div className='itemText'>{this.props.acronym} : {this.props.title} </div>
                <div className='itemAttributes'>
                    <table>
                        <tbody>
                            <tr>
                                <td className={priority} style={{ width: '100%', paddingLeft: '15%', border:'none' }}></td>
                            </tr>
                            <tr>
                                <td className={type} style={{ width: '100%', border: 'none' }}></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

}
// id="open" onDrop="drop(event)" onDragover="allowDrop"
// onDragstart="return false;" onDrop="false"
