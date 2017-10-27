import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {blue, white} from '../../commons/colors';

export default class Button extends Component {

    static propTypes = {
        label: PropTypes.string,
        onClick: PropTypes.func.isRequired
    }

    static defaultProps = {
        label: ''
    }

    render () {
        const {label, onClick} = this.props;
        return (
            <div
                onClick={onClick}
                style={{
                    background: blue,
                    borderRadius: 20,
                    color: white,
                    cursor: 'pointer',
                    display: 'table-cell',
                    height: 40,
                    padding: 5,
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    width: 140
                }}
            >
                {label}
            </div>
        );
    }

}
