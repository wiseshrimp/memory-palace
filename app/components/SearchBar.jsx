'use strict'

import React from 'react';
import { Link } from 'react-router';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTerm: ''
        }
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
    }

    render() {
        return (
          <li>
            <form
              className="navbar-form"
              role="search"
              onSubmit={this.onSearchSubmit}>
                <div className="input-group">
                  <input type="text" className="form-control hidden" placeholder="Search" name="srch-term" id="srch-term" onChange={this.onInputChange} />
                  <div className="input-group-btn">
                    <Link to={this.state.currentTerm ? `search/${this.state.currentTerm}` : '/'}>
                    <button onClick={unhide} className="btn btn-default" type="submit">
                        <i className="glyphicon glyphicon-search" />
                      </button>
                    </Link>
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

function unhide() {
  var input = document.getElementById('srch-term');
  if (input) {
    if (input.className === "form-control hidden") input.className = "form-control unhidden";
    else input.className = "form-control hidden";
  }
}