import React, { Component } from 'react';
import './Item.css';

export default class Item extends Component {
    render() {
        return (
            <div className="Item">
                <div className="ItemContent">
                    <form name="formItem">
                        Project:
                        <select style={{width:'15%'}} id="project" name="project">
                        </select>
                        &nbsp;Item type:
                        <select style={{ width: '15%' }} name="type">
                            <option defaultValue>Story</option>
                            <option>Feature</option>
                            <option>Request</option>
                            <option>Bug</option>
                            <option>Epic</option>
                        </select>
                        &nbsp;Priority:
                        <select style={{ width: '26%' }} name="priority">
                            <option value="4">Highest priority</option>
                            <option value="3">High priority</option>
                            <option defaultValue value="2">Regular priority</option>
                            <option value="1">Low priority</option>
                            <option value="0">No priority</option>
                        </select><br />
                        Item title:
                        <input type="text" style={{ width: '84%', margin:'1.5% 0% 0.75  % 0%'}} name="title" /><br />
                            Item description:<br />
                            <textarea rows="10" style={{ width: '99%', resize: 'none' }} name="description"></textarea><br />
                            <div style={{textAlign: 'right', width: '100%' }}>
                                <button style={{ marginRight: '2.5%' }} className="submitButton" name="submitted" value="newItem">Submit</button>
                                <button className="cancelButton" onClick={() => { console.log("Close"); }} type="button">Cancel</button>
                            </div>
                     </form>    
                </div>
            </div>
        );
    };

}

