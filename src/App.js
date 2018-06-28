import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './Main.js'
import History from './History.js'

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/history' component={History} />
                </Switch>
            </div>
        );
    }
}

