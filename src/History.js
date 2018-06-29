import React, { Component } from 'react';

export default class History extends Component {
    render() {
        return (
            <div>
                <table className="headerRow" >
                    <tbody>
                        <tr>
                            <th> PROJECT NAME </th>
                            <th> PROJECT DETAILS </th>
                            <th> ITEM TITLE </th>
                            <th> ITEM TYPE </th>
                            <th> ITEM PRIORITY </th>
                            <th> ITEM DESCRIPTION </th>
                        </tr>
                    </tbody>
                </table>
                <table className="historyTable" >
                    <tbody>
                        <tr>
                            <th> &nbsp; </th>
                            <th> &nbsp; </th>
                            <th> &nbsp; </th>
                            <th> &nbsp; </th>
                            <th> &nbsp; </th>
                            <th> &nbsp; </th>
                        </tr>
                    </tbody>
                </table>
                <input className="fixed search" type="text" maxLength="3" placeholder="Search project by acronym"/>
            </div>
        );
    }
}

