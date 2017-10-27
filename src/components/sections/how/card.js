import React, {Component} from 'react';
import {black, blue2, grey} from '../../../commons/colors';

import PropTypes from 'prop-types';

export default class Card extends Component {

    static propTypes = {
        number: PropTypes.string,
        style: PropTypes.object,
        text: PropTypes.string,
        title: PropTypes.string
    }

    render () {
        const {number, style, text, title} = this.props;
        return (
            <div
                style={style}
            >
                <div
                    style={{
                        fontSize: 70,
                        color: blue2,
                        textAlign: 'left',
                        width: '100%'
                    }}
                >
                    {number}
                </div>
                <div
                    style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: black,
                        textAlign: 'left',
                        width: '100%'
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        fontSize: 20,
                        color: grey,
                        textAlign: 'left',
                        width: '100%'
                    }}
                >
                    {text}
                </div>
            </div>
        );
    }

}
