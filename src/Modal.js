import React, { Component } from 'react';
import { insertAPI } from './functions'
import axios from 'axios'
import './styles.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: "1",
            type: "Story",
            priority: "0",
            title: "",
            description: "",
            acronym: "",
            projects: ""
        }
        this.stateUpdater = this.stateUpdater.bind(this);
        this.submitItem = this.submitItem.bind(this);
        this.modalSelector = this.modalSelector.bind(this);
    }

    componentDidMount() {
        let modalType = this.props.modalType;
        axios.get(`http://localhost:3001/api/projects`)
            .then(res => {
                let rows = [];
                rows.push(res.data.map(function (row) {
                    if (modalType === 'item') {
                        return <option value={row.id} key={row.id}>{row.acronym}</option>;
                    }
                    return <option value={row.id} key={row.id}>{row.title}</option>;
                }))
                this.setState({ projects: rows });
            });
    }

    modalSelector(modalType) {
        switch (modalType) {
            case 'release':
                return (
                    <div>
                        Project title:
                        <select style={{ width: '50%' }} name="project" onChange={this.stateUpdater} required>
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
                            <option value="-0">No priority</option>
                        </select> <br />
                        Item title:
                        <input type="text" style={{ width: '84%', margin: '1.5% 0% 0.75  % 0%' }} name="title" onChange={this.stateUpdater} required/> <br />
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
        let resource;
        let data;
        switch (this.props.modalType) {
            case 'project':
                data = { title: this.state.title, acronym: this.state.acronym, description: this.state.description }
                resource = "projects";
                break;
            case 'item':
                data = { p_id: this.state.project, type: this.state.type, priority: this.state.priority, title: this.state.title, description: this.state.description, status: "open" }
                resource = "items";
                break;
            default:
                break;
        }
        insertAPI(resource, data);
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
//this.state.project,this.state.type, this.state.priority, this.state.title, this.state.description
/*[{"$id":"1","id":1,"title":"Ut qui quibusdam sint lab","acronym":"r","description":"Story","items":[]},{"$id":"2","id":2,"title":"Dolorem animi et ex et vo","acronym":"c","description":"Story","items":[]},{"$id":"3","id":3,"title":"Quo optio ullam et ad. Qu","acronym":"g","description":"Story","items":[]},{"$id":"4","id":4,"title":"Laudantium harum et quas ","acronym":"a","description":"Tenetur officiis quia ea qui. Et quos unde sint magnam commodi aliquid. Aut aut laudantium est officiis molestiae eligendi illo molestiae.","items":[]},{"$id":"5","id":5,"title":"Dolorem nihil et eos quos","acronym":"t","description":"Story","items":[]},{"$id":"6","id":6,"title":"Test1","acronym":"ts","description":null,"items":[]}]*/
