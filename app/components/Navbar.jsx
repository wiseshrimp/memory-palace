'use strict'

import React from 'react';
import {Link} from 'react-router';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">MEMORY PALACE</a>                
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                <li>
                    <Link to="/" activeClassName="active">memories</Link>
                </li>
                <li>
                    <Link to="/" activeClassName="active">stories</Link>
                </li>
                </ul>
                
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-shopping-cart"></span></a></li>                    
                    <li><a href="#"><span className="glyphicon glyphicon-user"></span></a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span></a></li>
                </ul>
            </div>
            </div>
        </nav>
        );       
    }
}