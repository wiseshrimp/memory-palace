'use strict'

import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    checkPasswordMatch() {
        var password = $("#password").val();
        var confirmPassword = $("#confirm_password").val();

        if (password != confirmPassword)
            $("#password_message").html("Passwords do not match!");
    }

    onLoginSubmit(event) {
        const userCred = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        event.preventDefault();
        this.props.login(userCred);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-login">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <a href="#" className="active" id="login-form-link">Login</a>
                                    </div>
                                    <div className="col-xs-6">
                                        <a href="#" id="register-form-link">Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <form id="login-form" action="#" method="post" role="form" onSubmit={this.onLoginSubmit}>
                                        <div className="form-group">
                                            <input type="text" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-6 col-sm-offset-3">
                                                    <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="text-center">
                                                        <a href="#" tabIndex="5" className="forgot-password">Forgot Password?</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <form id="register-form" action="#" method="post" role="form">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <h5 id="password_message"></h5>
                                            <input type="password" name="confirm_password" id="confirm_password" tabIndex="2" className="form-control" onChange={this.checkPasswordMatch} placeholder="Confirm Password" />
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-6 col-sm-offset-3">
                                                    <input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register Now" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}