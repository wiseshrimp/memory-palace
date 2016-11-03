import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';

export default class Root extends Component {
    render() {
        return (
            <div>
                <Navbar />
                {
                    this.props.children
                }
                <Footer />
            </div>    
        )
    }
}