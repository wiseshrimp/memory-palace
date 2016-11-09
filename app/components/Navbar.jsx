'use strict'

import React from 'react';
import { Link } from 'react-router';
import SearchBar from '../components/SearchBar';
import MiniCart from '../containers/MiniCart';

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
              <Link to="/" className="navbar-brand" href="#"><img src="favicon.ico" height="30" /></Link>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a data-toggle="dropdown" className="dropdown-toggle" href="#">explore <b className="caret"></b></a>
                  <ul className="dropdown-menu">
                    <li><Link to="/genre/drama" id="drama">drama</Link></li>
                    <li><Link to="/genre/thriller" id="thriller">thriller</Link></li>  
                    <li><Link to="/genre/mystery" id="mystery">mystery</Link></li>  
                    <li><Link to="/genre/horror" id="horror">horror</Link></li>
                    <li><Link to="/genre/feel-good" id="feel-good">feel-good</Link></li>
                    <li><Link to="/genre/romance" id="romance">romance</Link></li>
                  </ul>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <SearchBar />
                <MiniCart />
                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-user"></span></a>
                  <ul className="dropdown-menu">
                    {(this.props.loginUser.name) ? <li><a href="#">{this.props.loginUser.name}</a></li> : <li><Link to="/login">Log In</Link></li>}
                    <li className="divider"></li>
                    <li><Link to='/profile'>Account</Link></li>
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
