import React, { Component } from 'react';
import { accessAPI } from './functions'
import './styles.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: "",
            type: "Story",
            priority: "0",
            title: "",
            description: "",
            acronym: ""
        }
        this.stateUpdater = this.stateUpdater.bind(this);
        this.submitItem = this.submitItem.bind(this);
        this.modalSelector = this.modalSelector.bind(this);
    }

    modalSelector(modalType) {
        switch (modalType) {
            case 'release':
                return (
                    <div>
                        Project title:
                        <select style={{ width: '50%' }} name="project" onChange={this.stateUpdater}>
                        </select>
                        &nbsp;Acronym:
                        <input type="text" style={{ width: '15%', margin: '1.5% 0% 0.75  % 0%', textTransform: 'uppercase' }} name="acronym" readOnly maxLength="3" /> <br /> <br />
                        <div style={{ textAlign: 'right', width: '100%' }}>
                            <button style={{ marginRight: '2.5%' }} className="submitButton">Submit</button>
                            <button className="cancelButton" onClick={this.props.closeSelf} type="button">Cancel</button>
                        </div>
                    </div>);
            case 'project':
                return (
                    <div>
                        Project title:
                        <input type="text" style={{ width: '48%', margin: '1.5% 0% 0.75  % 0%' }} name="title" onChange={this.stateUpdater} maxLength="25"/>
                        &nbsp;Acronym:
                        <input type="text" style={{ width: '15%', margin: '1.5% 0% 0.75  % 0%', textTransform:'uppercase' }} name="acronym" onChange={this.stateUpdater} maxLength="3"/> <br />
                        Project description: <br />
                        <textarea rows="10" style={{ width: '99%', resize: 'none' }} name="description" onChange={this.stateUpdater}></textarea> <br />
                        <div style={{ textAlign: 'right', width: '100%' }}>
                            <button style={{ marginRight: '2.5%' }} className="submitButton">Submit</button>
                            <button className="cancelButton" onClick={this.props.closeSelf} type="button">Cancel</button>
                        </div>
                    </div>);
            case 'item':
                return(
                    <div>
                        Project:
                        <select style={{ width: '15%' }} name="project" onChange={this.stateUpdater}>
                        </select>
                        &nbsp; Item type:
                        <select style={{ width: '15%' }} name="type" onChange={this.stateUpdater} defaultValue="Story">
                            <option>Story</option>
                            <option>Feature</option>
                            <option>Request</option>
                            <option>Bug</option>
                            <option>Epic</option>
                        </select>
                        &nbsp; Priority:
                        <select style={{ width: '26%' }} name="priority" onChange={this.stateUpdater} defaultValue="0">
                            <option value="2">Highest priority</option>
                            <option value="1">High priority</option>
                             <option value="0">Regular priority</option>
                            <option value="-1">Low priority</option>
                            <option value="-0">No priority</option>
                        </select> <br />
                        Item title:
                        <input type="text" style={{ width: '84%', margin: '1.5% 0% 0.75  % 0%' }} name="title" onChange={this.stateUpdater} /> <br />
                        Item description: <br />
                        <textarea rows="10" style={{ width: '99%', resize: 'none' }} name="description" onChange={this.stateUpdater}></textarea> <br />
                        <div style={{ textAlign: 'right', width: '100%' }}>
                            <button style={{ marginRight: '2.5%' }} className="submitButton">Submit</button>
                            <button className="cancelButton" onClick={this.props.closeSelf} type="button">Cancel</button>
                        </div>
                    </div>);
            default:
                break;

        }
    }

    stateUpdater(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitItem(e) {
        let method;
        let resource;
        let data;
        switch (this.props.modalType) {
            case 'project':
                data = { title: this.state.title, acronym: this.state.acronym, description: this.state.description }
                resource = "projects";
                method = "POST";
                break;
            case 'item':
                data = { project: 1, type: this.state.type, priority: this.state.priority, title: this.state.title, description: this.state.description }
                resource = "items";
                method = "POST";
                break;
            default:
                break;
        }
        accessAPI(method, resource, data);
        alert();
    }

    render() {
        return (
            <div className="Modal">
                <div className="ModalContent">
                    <form name="formItem" onSubmit={this.submitItem}>
                        {this.modalSelector(this.props.modalType)}
                    </form>
                    <div name="details">
                    </div>
                </div>
            </div>
        );
    };

}


