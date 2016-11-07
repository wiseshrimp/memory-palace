'use strict'

import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onUserSubmit = this.onUserSubmit.bind(this);
        this.checkPasswordMatch = this.checkPasswordMatch.bind(this);
    }

    componentWillMount() {
        $(function() {
            $('#login-form-link').click(function(e) {
                $("#login-form").delay(100).fadeIn(100);
                $("#register-form").fadeOut(100);
                $('#register-form-link').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            });
            $('#register-form-link').click(function(e) {
                $("#register-form").delay(100).fadeIn(100);
                $("#login-form").fadeOut(100);
                $('#login-form-link').removeClass('active');
                $(this).addClass('active');
                e.preventDefault();
            });
        });
    }

    checkPasswordMatch() {
        var password = $("#new_password").val();
        var confirmPassword = $("#confirm_password").val();

        if (password !== confirmPassword)
            $("#password_message").html("Passwords do not match!");
        else
            $("#password_message").html("");
    }

    onUserSubmit(event) {
        event.preventDefault();
        const userCred = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        if (event.target.id === 'login-form') this.props.login(userCred);
        else {
            userCred.name = event.target.user_name.value;
            this.props.registerUser(userCred);
        }
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
                                    <form id="login-form" action="#" method="post" role="form" onSubmit={this.onUserSubmit}>
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
                                    <form id="register-form" action="#" method="post" role="form" onSubmit={this.onUserSubmit}>
                                        <div className="form-group">
                                            <input type="text" name="user_name" id="user_name" tabIndex="1" className="form-control" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email Address" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" id="new_password" tabIndex="2" className="form-control" placeholder="Password" />
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
