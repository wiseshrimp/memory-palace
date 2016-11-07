'use strict'

import React from 'react';
import { Link } from 'react-router';
import SearchBar from '../components/SearchBar';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    triggerLogout() {
        if (this.props.loginUser) {
            return (
                <li><a href="#">Logout</a></li>
            )
        }
    }

    render() {
        return (
        <nav className="navbar navbar-default navbar-fixed-top">
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
                <li className="dropdown">
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">genres <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                    <li>
                        <a href="#">horror <i className="fa fa-caret-right"></i></a>
                        <ul className="dropdown-menu sub-menu">
                            <li><a href="#">bad horror</a></li>
                            <li><a href="#">foreign horror</a></li>
                            <li><a href="#">cannibal horror</a></li>
                            <li className="divider"></li>
                            <li className="nav-header">Nav header</li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                    <li><a href="#">drama</a></li>
                    <li><a href="#">comedy</a></li>
                    </ul>
                </li>
                </ul>
                
                <ul className="nav navbar-nav navbar-right">
                    <SearchBar />
                    <li><Link to="/cart/1"><span className="glyphicon glyphicon-shopping-cart"></span></Link></li>                    
                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-user"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Account</a></li>
                            {this.triggerLogout}
                        </ul>
                    </li>
                    <li><Link to="/login" activeClassName="active"><span className="glyphicon glyphicon-log-in"></span></Link></li>
                </ul>
            </div>
            </div>
            
        </nav>
        );       
    }
}