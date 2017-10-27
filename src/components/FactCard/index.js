import {Col} from 'antd';
import React, {Component} from 'react';
import {white} from '../../commons/colors';

import PropTypes from 'prop-types';

export default class Card extends Component {

    static propTypes = {
        icon: PropTypes.object,
        md: PropTypes.number,
        text: PropTypes.string,
        title: PropTypes.string,
        xs: PropTypes.number
    }

    render () {
        const {icon, md, text, title, xs} = this.props;
        return (
            <Col
                xs={xs}
                md={md}
                style={{
                    backgroundColor: white,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: 200,
                    width: 200,
                    margin: 5
                }}
            >
                <img alt={'fact'} style={{height: 80}} src={icon} />
                <div style={{fontSize: 30}}>{title}</div>
                <div style={{fontSize: 14, textAlign: 'center'}}>{text}</div>
            </Col>
        );
    }

}