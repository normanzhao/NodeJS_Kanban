import React, { Component } from 'react';
import './styles.css';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            truncatedDescription: this.truncDesc()
        }

        this.itemClick = this.itemClick.bind(this);
    }

    //truncate description so it looks nicer in the item div
    //return empty sting if null to avoid undefinted errors, limit length to 105 chracters for all else
    truncDesc() {
        let description = this.props.data.description
        if (description == null) {
            return "";
        }
        else if (description.length <= 105) {
            return description
        }
        else if (description.split(" ").length === 1) {
            return description.slice(0,105) + "..."
        }
        let words = description.split(" ");
        let letters = 0;
        let index = 0;
        while (letters <= 105 && index < words.length) {
            console.log(words[index])
            letters += words[index].length;
            index++;
        };
        return words.slice(0, index).join(" ") + "...";
    }

    itemClick() {
        this.props.passModal(this.props);
    }

    render() {
        this.truncDesc()
        const priority = ["fas fa-angle-double-down", "fas fa-angle-down", "far fa-circle", "fas fa-angle-up", "fas fa-angle-double-up"][parseInt(this.props.data.priority, 10) + 2];
        const type = { Story: "fas fa-book", Feature: "fas fa-exclamation", Request: "fas fa-question", Bug: "fas fas fa-bug", Epic: "fas fa-bolt" }[this.props.data.type];
        return (
            <div className='Item' onClick={this.itemClick}>
                <div className='itemTitle'>[{this.props.data.acronym}]: {this.props.data.title} 
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
