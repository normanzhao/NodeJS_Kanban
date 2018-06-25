import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Container from './Container.js'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Container class="open" />
                <Container class="ongoing" />
                <Container class="closed" />
            </div>
        );
    }
}

export default App;
