import React, { Component } from 'react';
import axios from 'axios'

export default class History extends Component {
    constructor() {
        super();
        this.state = {
            projects: ""
        };
    }
    //get items to test, then get projects, then use a single loop for project acrponym
    componentWillMount() {
        let getProjects = [];
        const priorities = ["No priority", "Low priority", "Regular priority", "High priority", "Highest priority"]
        axios.get('http://localhost:3001/api/projects/released/')
            .then(res => {
                getProjects.push(res.data.map(function (project) {
                    let projectRow = [];
                    if (project.items.length === 0) {
                        projectRow.push(
                            <tr key={project.id}><td>[{project.id}]{project.title}</td>
                                <td>{project.description}</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            )
                    }
                    else {
                        let index = 0;
                        projectRow.push(
                            <tr key={project.items[index].id}>
                                <td rowSpan={project.items.length}>[{project.id}]{project.title}</td>
                                <td rowSpan={project.items.length}>{project.description}</td>
                                <td>{project.items[index].title}</td>
                                <td>{project.items[index].type}</td>
                                <td>{priorities[project.items[index].priority+2]}</td>
                                <td>{project.items[index].description}</td>
                            </tr>
                            )
                        index++;
                        while (index < project.items.length) {
                            projectRow.push(
                                <tr key={project.items[index].id}>
                                    <td>{project.items[index].title}</td>
                                    <td>{project.items[index].type}</td>
                                    <td>{priorities[project.items[index].priority + 2]}</td>
                                    <td>{project.items[index].description}</td>
                                </tr>
                            )
                            index++;
                        }
                    }
                    return projectRow;
                }));
                this.setState({ projects: getProjects })
            });
    }

    render() {
        return (
            <div>
                <table className="headerRow">
                    <tbody>
                        <tr>
                            <th> PROJECT NAME </th>
                            <th> PROJECT DESCRIPTION </th>
                            <th> ITEM TITLE </th>
                            <th> ITEM TYPE </th>
                            <th> ITEM PRIORITY </th>
                            <th> ITEM DESCRIPTION </th>
                        </tr>
                    </tbody>
                </table>
                <table className="historyTable">
                    <tbody>
                        <tr>
                            <th> &nbsp; </th>
                            <th> &nbsp; </th>
                            <th> &nbsp; </th>
                            <th> &nbsp; </th>
                            <th> &nbsp; </th>
                            <th> &nbsp; </th>
                        </tr>
                        {this.state.projects}
                    </tbody>
                </table>
                <input className="fixed search" type="text" maxLength="3" placeholder="Search project by acronym"/>
            </div>
        );
    }
}

