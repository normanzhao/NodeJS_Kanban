import React, { Component } from 'react';
import './Header.css';
import Item from './Item.js'

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };
    };

    render() {
        let modal;
        if (this.state.showModal) { modal = <Item />; };
        return (
            <div>
            {modal}
            <table className="header" >
                <tbody>
                    <tr>
                        <th className="releaseButton"><button onClick={() => { console.log("Release"); /*TODO: edit later to release*/ }}>Release</button></th>
                        <th className="header-title">KANBAN BOARD</th>
                        <th className="newButton"><button onClick={() => { this.setState({showModal:true}); }}>New item</button></th>
                    </tr>
                </tbody>
            </table>
            </div>
        );
    };

}

