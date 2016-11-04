import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <li>
                    <form className="navbar-form" role="search">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term" />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                            </div>
                        </div>
                    </form>
                </li>
        )
    }
}