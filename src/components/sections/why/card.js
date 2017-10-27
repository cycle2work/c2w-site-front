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
                {icon ?
                    <div
                        style={{
                            borderRadius: '50%',
                            width: '80px',
                            height: '80px',
                            verticalAlign: 'middle',
                            boxShadow:
                            `0 0 0 2px hsl(0, 0%, 92%),
                            0 3px 0 6px hsl(0, 0%, 94%),
                            0 6px 0 13px hsl(0, 0%, 98%)`
                        }}
                    >
                        <img
                            style={{
                                height: 50,
                                marginTop: 15
                            }}
                            src={icon}
                        />
                    </div>
                    : null}
                <div style={{paddingTop: 20}}>
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
            </div>
        );
    }

}
