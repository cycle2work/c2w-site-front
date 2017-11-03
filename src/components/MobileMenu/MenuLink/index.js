import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class MenuLink extends Component {

    static propTypes = {
        label: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        url: PropTypes.string
    }

    render () {
        const {label, onClick, url} = this.props;
        return (
            <a
                href={'#'.concat(url)}
                key={label}
                onClick={onClick}
            >
                <span>{label}</span>
            </a>
        );
    }
}