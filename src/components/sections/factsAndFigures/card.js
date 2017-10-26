import {Row} from 'antd';
import React, {Component} from 'react';
import {blue} from '../../../commons/colors';
import Button from '../../Button';

import homeCyclist from '../../../assets/images/home_cyclist.png';
import PropTypes from 'prop-types';

export default class Card extends Component {

    static propTypes = {
        icon: PropTypes.object,
        text: PropTypes.string,
        title: PropTypes.string
    }

    render () {
        const {icon, text, title} = this.props;
        return (
            <div style={{
                border: '1px solid gray',
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: 200,
                width: 200
            }}>
                <img style={{height: 80}} src={icon} />
                <div style={{fontSize: 30}}>{title}</div>
                <div style={{fontSize: 14, textAlign: 'center'}}>{text}</div>
            </div>
        );
    }

}