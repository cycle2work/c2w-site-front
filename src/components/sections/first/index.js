import {Row} from 'antd';
import React, {Component} from 'react';
import {blue} from '../../../commons/colors';
import Button from '../../Button';

import homeCyclist from '../../../assets/images/home_cyclist.png';

export default class FirstSection extends Component {

    render () {
        return (
            <Row>
                <img
                    alt='home_cycling'
                    src={homeCyclist}
                    style={{
                        position: 'fixed',
                        right: 0,
                        width: 800
                    }}
                />
                <h1>{'Cycle2Work'}</h1>
                <h2 style={{color: blue}}>{'For a helthier, happier world'}</h2>
                <div
                    style={{
                        marginBottom: 60,
                        marginTop: 60
                    }}
                >
                    <div>{'Want to improve your health and your planet?'}</div>
                    <div>{'Cycle2Work is here to help! Simply create a'}</div>
                    <div>{'company team on Strava, connect to'}</div>
                    <div>{'Cycle2Work and start reducing your carbon'}</div>
                    <div>{'footprint today.'}</div>
                </div>
                <Button label={'JOIN NOW'} onClick={() => console.log("join_now")} />
            </Row>
        );
    }

}
