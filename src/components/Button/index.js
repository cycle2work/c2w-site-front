import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {blue, white} from '../../commons/colors';

export default class Button extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        label: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        textColor: PropTypes.string
    }

    static defaultProps = {
        backgroundColor: blue,
        label: '',
        textColor: white
    }

    render () {
        const {backgroundColor, label, onClick, textColor} = this.props;
        return (
            <div
                onClick={onClick}
                style={{
                    background: backgroundColor,
                    borderRadius: 20,
                    color: textColor,
                    cursor: 'pointer',
                    display: 'table-cell',
                    height: 40,
                    padding: 5,
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    width: 140,
                }}
            >
                {label}
            </div>
        );
    }

}