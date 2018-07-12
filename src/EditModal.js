import React, { Component } from 'react';
import axios from 'axios'
import './styles.css';


//this modal is very similar to the item modal that's rendered from the header. All the data fields will be the same, but some would be rendered as text and not input boxes because they cannot be changed. Changes to an item will be submitted via PUT request to the API
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        //state will have all data variables needed for each individual modal
        this.state = {
            id: 0,
            type: "",
            priority: 0,
            title: "",
            description: "",
            acronym: "",
            status: ""
        }
        this.stateUpdater = this.stateUpdater.bind(this);
        this.submitItem = this.submitItem.bind(this);
    }

    componentWillMount() {
        let checkedDescription = this.props.data.data.description
        if (checkedDescription === null) {
            checkedDescription = ""
        }
        this.setState({
            id: this.props.data.data.id,
            type: this.props.data.data.type,
            priority: this.props.data.data.priority,
            title: this.props.data.data.title,
            description: checkedDescription,
            acronym: this.props.data.data.acronym,
            status: this.props.data.data.status
        });
    }


    //updates the current state with any new changes in value, gets called with every single change
    stateUpdater(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitItem(e) {
        axios.put('http://localhost:3001/api/items/update', this.state)
            .then(res => {
                console.log(res);
            });
    }

    render() {
        return (
            <div className="Modal">
                <div className="ModalContent">
                    <form name="formItem" onSubmit={this.submitItem}>
                        Project: {this.state.acronym}
                        &nbsp; Item type:
                        <select style={{ width: '15%' }} name="type" onChange={this.stateUpdater} defaultValue={this.state.type}>
                            <option>Story</option>
                            <option>Feature</option>
                            <option>Request</option>
                            <option>Bug</option>
                            <option>Epic</option>
                        </select>
                        &nbsp; Priority:
                        <select style={{ width: '26%' }} name="priority" onChange={this.stateUpdater} defaultValue={this.state.priority}>
                            <option value="2">Highest priority</option>
                            <option value="1">High priority</option>
                            <option value="0">Regular priority</option>
                            <option value="-1">Low priority</option>
                            <option value="-0">No priority</option>
                        </select> <br />
                        [{this.state.id}] {this.state.title} <br />
                        <textarea rows="10" style={{ width: '99%', resize: 'none' }} name="description" onChange={this.stateUpdater} value={this.state.description}></textarea> <br />
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
