'use strict'

import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <footer className="footer">
            <Link id="footer-link" to="/info">FAQ</Link>
        </footer>
        )
    }
}