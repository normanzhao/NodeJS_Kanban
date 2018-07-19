import React, { Component } from 'react';
import { insertAPI } from './functions'
import axios from 'axios'
import './styles.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        //state will have all data variables needed for each individual modal
        this.state = {
            project: "1",
            type: "Story",
            priority: "0",
            title: "",
            description: "",
            acronym: "",
            projects: ""
        };
        this.stateUpdater = this.stateUpdater.bind(this);
        this.submitItem = this.submitItem.bind(this);
        this.modalSelector = this.modalSelector.bind(this);
    }

    //for the options, get all the data from the API via GET request, then return acronyms and value pair if items, else project names and value pair for releasing
    componentDidMount() {
        let modalType = this.props.modalType;
        axios.get(`http://localhost:3001/api/projects`)
            .then(res => {
                let rows = [];
                rows.push(res.data.map(function (row) {
                    if (modalType === 'item') {
                        return <option value={row.id} key={row.id}>{row.acronym}</option>;
                    }
                    if (row.status !== "released") {
                        return <option value={row.id} key={row.id}>{row.acronym}: {row.title}</option>;
                    }
                    return null;
                }))
                this.setState({ projects: rows });
            });
    }

    //return different UI for the different modal types
    modalSelector(modalType) {
        switch (modalType) {
            case 'release':
                return (
                    <div>
                        Project title:
                        <select style={{ width: '50%' }} name="project" onChange={this.stateUpdater} required>
                            {
                                this.state.projects
                            }
                        </select>
                        <div style={{ textAlign: 'right', width: '100%' }}>
                            <button style={{ marginRight: '2.5%' }} className="submitButton">Release</button>
                            <button className="cancelButton" onClick={this.props.closeSelf} type="button">Cancel</button>
                        </div>
                    </div>);
            case 'project':
                return (
                    <div>
                        Project title:
                        <input type="text" style={{ width: '48%', margin: '1.5% 0% 0.75  % 0%' }} name="title" onChange={this.stateUpdater} maxLength="25" required/>
                        &nbsp;Acronym:
                        <input type="text" style={{ width: '15%', margin: '1.5% 0% 0.75  % 0%', textTransform: 'uppercase' }} name="acronym" onChange={this.stateUpdater} maxLength="3" required/> <br />
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
                        <select style={{ width: '15%' }} name="project" onChange={this.stateUpdater} defaultValue="1" required>
                            {
                                this.state.projects
                            }
                        </select>
                        &nbsp; Item type:
                        <select style={{ width: '15%' }} name="type" onChange={this.stateUpdater} defaultValue="Story" required>
                            <option>Story</option>
                            <option>Feature</option>
                            <option>Request</option>
                            <option>Bug</option>
                            <option>Epic</option>
                        </select>
                        &nbsp; Priority:
                        <select style={{ width: '26%' }} name="priority" onChange={this.stateUpdater} defaultValue="0" required>
                            <option value="2">Highest priority</option>
                            <option value="1">High priority</option>
                            <option value="0">Regular priority</option>
                            <option value="-1">Low priority</option>
                            <option value="-2">No priority</option>
                        </select> <br />
                        Item title:
                        <input type="text" style={{ width: '84%', margin: '1.5% 0% 0.75  % 0%' }} name="title" maxLength="35" onChange={this.stateUpdater} required/> <br />
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

    //updates the current state with any new changes in value, gets called with every single change
    stateUpdater(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //selector option to do different actions depending on the modal type, item and project adds a new item or project respetively via POST request, release will call the API and update all closed items of the selected project to "released" status via PUT request
    submitItem(e) {
        let resource;
        let data;
        switch (this.props.modalType) {
            case 'project':
                data = { title: this.state.title, acronym: this.state.acronym, description: this.state.description, status: "open" };
                resource = "projects";
                break;
            case 'item':
                data = { p_id: this.state.project, type: this.state.type, priority: this.state.priority, title: this.state.title, description: this.state.description, status: "open" };
                resource = "items";
                break;
            case 'release':
                data = { id: this.state.project, status: "released" };
                resource = "projects/update";
                window.confirm("Are you sure you want to release this project?");
                break;
            default:
                break;
        }
        insertAPI(resource, data);
        window.location.reload();
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
