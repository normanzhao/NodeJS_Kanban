import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import Item from './Item.js'

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.hideModal = this.hideModal.bind(this);
    };

    hideModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                {this.state.showModal && <Item closeModal={this.hideModal} />}
            <table className="header" >
                <tbody>
                    <tr>
                        <th className="left" style={{ width: '150%', paddingLeft: '15%', paddingTop: '5%' }}>
                            <button className="left Button" onClick={() => { console.log("Release"); /*TODO: edit later to release*/ }}>Release</button>
                            <Link to='/history'>
                                 <button className="right Button">History</button>
                            </Link>
                        </th>
                        <th className="header-title">KANBAN BOARD</th>
                        <th className="right" style={{ width: '150%', paddingRight: '15%', paddingTop: '5%' }}>
                            <button className="left Button" onClick={() => { this.setState({ showModal: true }); }}>New Project</button>
                            <button className="right Button"onClick={() => { this.setState({ showModal: true }); }}>New item</button>
                        </th>
                    </tr>
                </tbody>
            </table>
            </div>
        );
    };

}

