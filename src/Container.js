import React, { Component } from 'react';
import Item from './Item.js';
import './styles.css';
import axios from 'axios'

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ""
        }
    }

    //get and parse JSON file containing all the items for this specific status(open/ongoing/closed) from the API via GET request then put them all in state so render can display them when they're all loaded
    componentDidMount() {
            axios.get('http://localhost:3001/api/items/' + this.props.class)
                .then(res => {
                    let itemsArray = [];
                    itemsArray.push(res.data.map(function (item) {
                        return <Item key={item.id} acronym={item.acronym} id={item.id} title={item.title} type={item.type} priority={item.priority} description={item.description} />
                    }))
                    this.setState({ items: itemsArray });
                });
    }

    render() {
        return (
            <div className={this.props.class + " Container"} >
                <span className="titleText">{this.props.class.toUpperCase()}</span>
                {this.state.items}
            </div>
        );
    };

}
