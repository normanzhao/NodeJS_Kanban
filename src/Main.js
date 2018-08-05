import React, { Component } from 'react';
import Header from './Header.js'
import Container from './Container.js'
import EditModal from './EditModal.js'
import './styles.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editData: "",
            showModal: false
        };
        this.setModal = this.setModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    //show edit modal, the code is located here because the state is bubbled up. This component owns the edit modal so only one instance needs to be created
    setModal(data) {
        this.setState({
            editData: data,
            showModal: true
        });
    }

    //hide edit-modal when not in use
    hideModal() {
        this.setState({
            showModal: false,
        });
    }

    render() {
        return (
            <div>
                {this.state.showModal && <EditModal closeSelf={this.hideModal} data={this.state.editData} />}
                <Header />
                <Container class="open" passModal={this.setModal} />
                <Container class="ongoing" passModal={this.setModal}/>
                <Container class="closed" passModal={this.setModal}/>
            </div>
        );
    }
}

