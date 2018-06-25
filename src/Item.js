import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    render() {
        console.log("AsdA");
        return (
            <div className="Item">
                <div className="ItemContent">
                    <form name="formItem">
                        Project:
                        <select style={{width:'18%'}} id="project" name="project">
                        </select>
                        Item type:
                        <select style={{ width: '18%' }} name="type">
                            <option selected>Story</option>
                            <option>Feature</option>
                            <option>Request</option>
                            <option>Bug</option>
                            <option>Epic</option>
                        </select>
                        Priority:
                        <select style={{ width: '26%' }} name="priority">
                            <option value="4">Highest priority</option>
                            <option value="3">High priority</option>
                            <option selected value="2">Regular priority</option>
                            <option value="1">Low priority</option>
                            <option value="0">No priority</option>
                        </select><br />
                        Item title:
                        <input type="text" style={{ width: '84%', margin:'0.75%'}} name="title" /><br />
                            Item description:<br />
                            <textarea rows="10" cols="68" style={{ resize: 'none' }} name="description"></textarea><br />
                            <div style={{ margin: '1%', textAlign:'right'}}>
                                    <button className="cancelButton" onclick="cancelModal()" type="button">Cancel</button>
                                    <button className="submitButton" name="submitted" value="newItem">Submit</button>
                                </div>
                     </form>    
                </div>
            </div>
        );
    };

}

export default Item