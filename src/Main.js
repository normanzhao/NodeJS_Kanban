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
        }
        this.setModal = this.setModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    setModal(data) {
        this.setState({
            editData: data,
            showModal: true
        })
    }

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

