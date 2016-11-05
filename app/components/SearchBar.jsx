'use strict'

import React from 'react';
import Router from 'react-router';

export default class SearchBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentTerm: ''
        }
        this.context = context;
        this.onInputChange = this.onInputChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onInputChange(e) {
        this.setState({
            currentTerm: e.target.value
        })
    }

    onSearchSubmit(e) {
        e.preventDefault();
        this.context.router.push({
            pathname: `search/${this.state.currentTerm}`
        })
    }

    render() {
        return (
                <li>
                <form
                    className="navbar-form"
                    role="search"
                    onSubmit={this.onSearchSubmit}>
                        <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term" onChange={this.onInputChange} />
                            <div className="input-group-btn">
                            <button className="btn btn-default" type="submit">
                                <i className="glyphicon glyphicon-search">
                                </i>
                            </button>
                            </div>
                        </div>
                    </form>
                </li>
        )
    }
}

SearchBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};