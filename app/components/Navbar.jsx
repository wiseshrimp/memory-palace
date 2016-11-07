'use strict'

import React from 'react';
import { Link } from 'react-router';
import SearchBar from '../components/SearchBar';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    triggerLogout() {
        return (
            <li><a
                href="#"
                onClick={() => {
                    this.props.logout()
                        .then(function () { this.forceUpdate() })
                } }>Logout</a></li>
        )
    }

    render() {
        return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand" href="#">MEMORY PALACE</Link>                
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
                        <Link to="/genre/horror" id="horror">horror <i className="fa fa-caret-right"></i></Link>
                        <ul className="dropdown-menu sub-menu">
                            <li><a href="#">bad horror</a></li>
                            <li><a href="#">foreign horror</a></li>
                            <li><a href="#">cannibal horror</a></li>
                        </ul>
                    </li>
                    <li><Link to="/genre/feel-good" id="feel-good">feel-good</Link></li>
                    </ul>
                </li>
                </ul>
                
                <ul className="nav navbar-nav navbar-right">
                    <SearchBar />
                    <li><Link to="/cart/1"><span className="glyphicon glyphicon-shopping-cart"></span></Link></li>                    
                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-user"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Account</a></li>
                            {(this.props.loginUser.email) ? this.triggerLogout() : null}
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