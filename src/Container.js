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

    componentDidMount() {
        axios.get('http://localhost:3001/api/projects/open')
            .then(res => {
                let projects = {};
                res.data.map(function (project) {
                    projects[project.id] = project.acronym
                    return 0;
                })
                axios.get('http://localhost:3001/api/items/' + this.props.class)
                    .then(res => {
                        let itemsArray = [];
                        itemsArray.push(res.data.map(function (item) {
                            return <Item key={item.id} acronym={projects[item.p_id]} id={item.id} title={item.title} type={item.type} priority={item.priority} description={item.description} />
                        }))
                        this.setState({ items: itemsArray });
                    });
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
