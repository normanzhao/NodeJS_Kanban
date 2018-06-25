import React, { Component } from 'react';
import './Header.css';
import Item from './Item.js'

class Header extends Component {
    showModal()
    {
        return <Item />;
    }

    render() {
        return (
            <table className="header" >
                <tbody>
                    <tr>
                        <th className="releaseButton"><button onClick={this.showModal}>Release</button></th>
                        <th className="header-title">KANBAN BOARD</th>
                        <th className="newButton"><button onClick={this.showModal}>New item</button></th>
                    </tr>
                </tbody>
            </table>
        );
    };

}

export default Header