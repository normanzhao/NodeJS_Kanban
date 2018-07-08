import React, { Component } from 'react';
import './styles.css';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            truncatedDescription: this.truncDesc()
        }
    }

    truncDesc() {
        if (this.props.description == null) {
            return "";
        }
        else if (this.props.description.length <= 105) {
            return this.props.description
        }
        let words = this.props.description.split(" ");
        let letters = 0;
        let index = 0;
        while (letters <= 105 && index < words.length) {
            console.log(words[index])
            letters += words[index].length;
            index++;
        };
        return words.slice(0, index).join(" ") + "...";
    }

    render() {
        this.truncDesc()
        const priority = ["fas fa-angle-double-down", "fas fa-angle-down", "far fa-circle", "fas fa-angle-up", "fas fa-angle-double-up"][parseInt(this.props.priority,10) + 2];
        const type = { Story: "fas fa-book", Feature: "fas fa-exclamation", Request: "fas fa-question", Bug: "fas fas fa-bug", Epic: "fas fa-bolt" }[this.props.type];
        return (
            <div className='Item'>
                <div className='itemTitle'>[{this.props.acronym}]: {this.props.title} 
                    <div className='itemDescription'>{this.state.truncatedDescription} </div>
                </div>
                <div className='itemAttributes'>
                    <table>
                        <tbody>
                            <tr>
                                <td className={priority} style={{ width: '100%', border: 'none', textAlign: 'center' }}></td>
                            </tr>
                            <tr>
                            <td className={type} style={{ width: '100%', border: 'none', textAlign: 'center' }}></td>
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