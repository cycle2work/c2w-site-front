import React, {Component} from 'react';
import {black, grey} from '../../../commons/colors';

import PropTypes from 'prop-types';

export default class Card extends Component {

    static propTypes = {
        icon: PropTypes.object,
        style: PropTypes.object,
        text: PropTypes.string,
        title: PropTypes.string
    }

    render () {
        const {icon, style, text, title} = this.props;
        return (
            <div
                style={style}
            >
                {icon
                    ? <img style={{height: 80}} src={icon} />
                    : null}
                <div
                    style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: black
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        fontSize: 20,
                        textAlign: 'center',
                        color: grey
                    }}
                >
                    {text}
                </div>
            </div>
        );
    }

}
