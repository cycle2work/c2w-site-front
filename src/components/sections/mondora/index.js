import React, {Component} from 'react';

import {Row} from 'antd';

import gradient from '../../../assets/images/gradient_mondora.png';
import mondoraLogo from '../../../assets/images/logo_mondora.png';
import {black, white, yellow} from '../../../commons/colors';
import Button from '../../Button';

export default class Mondora extends Component {

    render () {
        return (
            <Row
                style={{
                    backgroundImage: `url(${gradient})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'repeat-y',
                    paddingBottom: 60,
                    paddingTop: 60,
                    marginTop: 50
                }}
            >
                <div
                    style={{
                        margin: 'auto',
                        maxWidth: 1200,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: white,
                        borderRadius: 10,
                        padding: 20
                    }}
                >
                    <img alt={'mondora-logo'} style={{marginTop: -110, width: 130}} src={mondoraLogo} />
                    <p style={{fontSize: 24, padding: 30, textAlign: 'center'}}>
                        {'In Mondora about '}
                        <b>35%</b>
                        {' of the company uses '}
                        <b>Cycle2Work</b>
                        {' and this has enabled us to save '}
                        <b>2500 km</b>
                        {' of car journeys, which equals about '}
                        <b>1.1 tones</b>
                        {` of CO2 reduction. The programme is also positively influencing out
                        of work activities: people are more careful of their use of car and
                        tend to cycle more on sundays and when on holiday too, encouraging
                        their families to do the same.`}
                    </p>
                    <Button
                        backgroundColor={yellow}
                        label={'LEARN MORE'}
                        onClick={() => {}}
                        textColor={black}
                    />
                </div>
            </Row>
        );
    }

}