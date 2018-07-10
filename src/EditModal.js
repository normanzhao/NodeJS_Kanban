import React, { Component } from 'react';
import axios from 'axios'
import './styles.css';


//this modal is very similar to the item modal that's rendered from the header. All the data fields will be the same, but some would be rendered as text and not input boxes because they cannot be changed. Changes to an item will be submitted via PUT request to the API
export default class EditModal extends Component {
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
        }
        this.stateUpdater = this.stateUpdater.bind(this);
        this.submitItem = this.submitItem.bind(this);
    }

    //for the options, return acronyms and value pair if items, else project names and value pair for releasing
    //solution is a littly hack-y since releasing needs 
    componentDidMount() {
    }


    //updates the current state with any new changes in value, gets called with every single change
    stateUpdater(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitItem(e) {
    }

    render() {
        let data = this.props.data
        return (
            <div className="Modal">
                <div className="ModalContent">
                    <form name="formItem" onSubmit={this.submitItem}>
                        Project: {data.acronym}
                        &nbsp; Item type:
                        <select style={{ width: '15%' }} name="type" onChange={this.stateUpdater} defaultValue={data.type}>
                            <option>Story</option>
                            <option>Feature</option>
                            <option>Request</option>
                            <option>Bug</option>
                            <option>Epic</option>
                        </select>
                        &nbsp; Priority:
                        <select style={{ width: '26%' }} name="priority" onChange={this.stateUpdater} defaultValue={data.priority}>
                            <option value="2">Highest priority</option>
                            <option value="1">High priority</option>
                            <option value="0">Regular priority</option>
                            <option value="-1">Low priority</option>
                            <option value="-0">No priority</option>
                        </select> <br />
                        Item title: {data.title} <br />
                        Item description: <br />
                        <textarea rows="10" style={{ width: '99%', resize: 'none' }} name="description" onChange={this.stateUpdater} value={data.description}></textarea> <br />
                        <div style={{ textAlign: 'right', width: '100%' }}>
                            <button style={{ marginRight: '2.5%' }} className="submitButton">Submit</button>
                            <button className="cancelButton" onClick={this.props.closeSelf} type="button">Cancel</button>
                        </div>
                    </form>
                    <div name="details">
                    </div>
                </div>
            </div>
        );
    };

}
