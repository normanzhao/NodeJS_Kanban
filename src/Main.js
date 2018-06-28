import React, { Component } from 'react';
import Header from './Header.js'
import Container from './Container.js'
import './styles.css';

export default class App extends Component {
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

