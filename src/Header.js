import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import Modal from './Modal.js'

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.hideModal = this.hideModal.bind(this);
    };

    hideModal() {
        this.setState({
            showModal: false,
            modalType: ""
        });
    }

    render() {
        return (
            <div>
                {this.state.showModal && <Modal closeSelf={this.hideModal} modalType={this.state.modalType} />}
            <table className="header" >
                <tbody>
                    <tr>
                        <th className="left" style={{ width: '150%', paddingLeft: '15%', paddingTop: '5%' }}>
                            <Link to='/history'>
                                <button className="left Button">History</button>
                            </Link>
                             <button className="right Button" onClick={() => { this.setState({ showModal: true, modalType: "release" }); }}>Release</button>
                        </th>
                        <th className="header-title">KANBAN BOARD</th>
                        <th className="right" style={{ width: '150%', paddingRight: '15%', paddingTop: '5%' }}>
                            <button className="left Button" onClick={() => { this.setState({ showModal: true, modalType:"project" }); }}>New Project</button>
                            <button className="right Button" onClick={() => { this.setState({ showModal: true, modalType:"item" }); }}>New item</button>
                        </th>
                    </tr>
                </tbody>
            </table>
            </div>
        );
    };

}

