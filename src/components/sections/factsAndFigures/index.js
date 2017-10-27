import React, {Component} from 'react';

import Card from '../../FactCard/index';
import {Row} from 'antd';

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
                <div style={{margin: 'auto', maxWidth: 1200}}>
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
                        justify={'space-around'}
                    >
                        <Card
                            icon={bike}
                            md={6}
                            text={'average length of employee commute per day'}
                            title={'35 km'}
                            xs={24}
                        />
                        <Card
                            icon={calendar}
                            md={6}
                            text={'CO2 per person per day generated through commuting'}
                            title={'4.32 kg'}
                            xs={24}
                        />
                        <Card
                            icon={world}
                            md={6}
                            text={'CO2 per person per year offset by cycling'}
                            title={'1 tonne'}
                            xs={24}
                        />
                        <Card
                            icon={heart}
                            md={6}
                            text={'average health and wellbeing improvement from cycling'}
                            title={'40%'}
                            xs={24}
                        />
                    </Row>
                </div>
            </Row>
        );
    }

}
