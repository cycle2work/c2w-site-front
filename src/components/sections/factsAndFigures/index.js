import PropTypes from 'prop-types';
import React, {Component} from 'react';

import Card from './card';
import {Col, Row} from 'antd';

import gradient from '../../../assets/images/gradient_facts.png';
import bike from '../../../assets/images/icons/icon_bike.svg';
import calendar from '../../../assets/images/icons/icon_calendar.svg';
import heart from '../../../assets/images/icons/icon_heart.svg';
import world from '../../../assets/images/icons/icon_world.svg';

export default class FactsAndFigures extends Component {

    render () {
        return (
            <Row
                style={{
                    backgroundImage: `url(${gradient})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'repeat-y',
                    paddingBottom: 50,
                    paddingTop: 50
                }}
            >
                <h2
                    style={{
                        marginBottom: 20,
                        fontSize: 30,
                        textAlign: 'center'
                    }}
                >
                    {'Facts and Figures'}
                </h2>
                <Row
                    type={'flex'}
                    justify={'center'}
                >
                    <Col xs={24} md={6}>
                        <Card
                            icon={bike}
                            text={'average length of employee commute per day'}
                            title={'35 km'}
                        />
                    </Col>
                    <Col xs={24} md={6}>
                        <Card
                            icon={calendar}
                            text={'CO2 per person per day generated through commuting'}
                            title={'4.32 kg'}
                        />
                    </Col>
                    <Col xs={24} md={6}>
                        <Card
                            icon={world}
                            text={'CO2 per person per year offset by cycling'}
                            title={'1 tonne'}
                        />
                    </Col>
                    <Col xs={24} md={6}>
                        <Card
                            icon={heart}
                            text={'average health and wellbeing improvement from cycling'}
                            title={'40%'}
                        />
                    </Col>
                </Row>
            </Row>
        );
    }

}