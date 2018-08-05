import React, { Component } from 'react';
import axios from 'axios'

export default class History extends Component {
    constructor() {
        super();
        this.state = {
            projects: ""
        };
    }
    //Load project-related information in merged cells, load items related to that project as separate cells
    componentWillMount() {
        let getProjects = [];
        const priorities = ["No priority", "Low priority", "Regular priority", "High priority", "Highest priority"]
        axios.get('http://localhost:3001/api/projects/all/released/')
            .then(res => {
                getProjects.push(res.data.map(function (project) {
                    let projectRow = [];
                    if (project.items.length === 0) {
                        projectRow.push(
                            <tr key={project.id}>
                                <td>[{project.acronym}]{project.title}</td>
                                <td>{project.description}</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        );
                    }
                    else {
                        //merge cells if there are multiple items related to the project
                        let index = 0;
                        projectRow.push(
                            <tr key={project.items[index].id}>
                                <td rowSpan={project.items.length}>[{project.acronym}]{project.title}</td>
                                <td rowSpan={project.items.length}>{project.description}</td>
                                <td>{project.items[index].title}</td>
                                <td>{project.items[index].type}</td>
                                <td>{priorities[project.items[index].priority + 2]}</td>
                                <td>{project.items[index].description}</td>
                            </tr>
                        );
                        index++;
                        while (index < project.items.length) {
                            projectRow.push(
                                <tr key={project.items[index].id}>
                                    <td>{project.items[index].title}</td>
                                    <td>{project.items[index].type}</td>
                                    <td>{priorities[project.items[index].priority + 2]}</td>
                                    <td>{project.items[index].description}</td>
                                </tr>
                            );
                            index++;
                        }
                    }
                    return projectRow;
                }));
                this.setState({ projects: getProjects })
            });
    }
    //the first set of header rows is fixed while the second one is just a spacer so the table underneath won't have a hidden top row
    render() {
        return (
            <div>
                <table className="headerRow">
                    <tbody>
                        <tr>
                            <th style={{ width: '15%' }}>PROJECT NAME</th>
                            <th style={{ width: '25%' }}>PROJECT DESCRIPTION</th>
                            <th style={{ width: '13%' }}>ITEM TITLE</th>
                            <th style={{ width: '12%' }}>ITEM TYPE</th>
                            <th style={{ width: '15%' }}>ITEM PRIORITY</th>
                            <th style={{ width: '20%' }}>ITEM DESCRIPTION</th>
                        </tr>
                    </tbody>
                </table>
                <table className="historyTable">
                    <tbody>
                        <tr>
                            <th style={{ width: '15%' }}>&nbsp;</th>
                            <th style={{ width: '25%' }}>&nbsp;</th>
                            <th style={{ width: '13%' }}>&nbsp;</th>
                            <th style={{ width: '12%' }}>&nbsp;</th>
                            <th style={{ width: '15%' }}>&nbsp;</th>
                            <th style={{ width: '20%' }}>&nbsp;</th>
                        </tr>{this.state.projects}
                    </tbody>
                </table>
            </div>
        );
    }
}

