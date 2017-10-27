import {Row, Col} from 'antd';
import React, {Component} from 'react';
import {primaryColor, white} from '../../../commons/colors';
import Button from '../../Button';

import {style} from './style';

export default class FirstSection extends Component {

    render () {
        return (
            <div style={style.container}>
                <Row gutter={30} style={style.contentRow}>
                    <Col lg={12} xs={24}>
                        <h1>{'Cycle2Work'}</h1>
                        <h2 style={{color: primaryColor}}>{'For a helthier, happier world'}</h2>
                        <div>
                            {'Want to improve your health and your planet? Cycle2Work is here to help! Simply create a company team on Strava, connect to Cycle2Work and start reducing your carbon footprint today.'}
                        </div>
                        <Button
                            backgroundColor={primaryColor}
                            label={'JOIN NOW'}
                            onClick={() => console.log('join_now')}
                            textColor={white}
                        />
                    </Col>
                    <Col lg={12} xs={24} >
                        <div style={style.div} />
                    </Col>
                </Row>
            </div>
        );
    }
}
