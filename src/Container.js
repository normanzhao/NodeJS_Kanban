import React, { Component } from 'react';
import Item from './Item.js';
import './styles.css';
import axios from 'axios'
import { insertAPI } from './functions.js'

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ""
        };

        this.drop = this.drop.bind(this);
    }

    //get and parse JSON file containing all the items for this specific status(open/ongoing/closed) from the API via GET request then put them all in state so render can display them when they're all loaded
    componentDidMount() {
        //add reference for "this" so the function scope would include and be able to call it
        let thisContainer = this;
        axios.get('http://localhost:3001/api/items/' + this.props.class)
            .then(res => {
                let itemsArray = [];
                itemsArray.push(res.data.map(function (item) {
                    return <Item key={item.id} data={item} passModal={thisContainer.props.passModal} />;
                }))
                this.setState({ items: itemsArray });
            });
    }

    //get the item id via datatransfer and then set the item's status to the new status
    drop(e) {
        let itemID = e.dataTransfer.getData("Text");
        console.log(this.state)
        insertAPI('items/status-update', { id: itemID, status: this.props.class })
        window.location.reload();
    }

    //element default behavior is to prevent drops, this enables it by preventing default behavior
    allowDrop(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className={this.props.class + " Container"} onDrop={this.drop} onDragOver={this.allowDrop}>
                <span className="titleText">{this.props.class.toUpperCase()}</span>
                {this.state.items}
            </div>
        );
    };

}
