import {Col, Row} from 'antd';
import React, {Component} from 'react';

import HowItWorks1 from '../../../assets/images/howitworks_01.png';
import HowItWorks2 from '../../../assets/images/howitworks_02.png';
import HowItWorks3 from '../../../assets/images/howitworks_03.png';

import Card from './card';
import {backgroundHow, black} from '../../../commons/colors';

const styles = {
    headerStyle: {
        textAlign: 'center',
        paddingBottom: '30px'
    },
    boxCardStyle: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    rowStyle: {
        textAlign: 'center',
        paddingBottom: 30
    },
    containerStyle: {
        background: backgroundHow,
        marginTop: '20px',
        maxWidth: 1800
    },
    imageStyle: {
        width: '24em'
    }
};

export default class How extends Component {

    render () {
        return (
            <Row style={styles.containerStyle}>
                <Row style={styles.headerStyle}>
                    <p
                        id='howItWorks'
                        style={{
                            fontSize: 40,
                            fontWeight: 'bold',
                            color: black
                        }}
                    >
                        {'How it works'}
                    </p>
                </Row>
                <Row
                    type='flex'
                    justify='space-around'
                    style={styles.rowStyle}
                >
                    <Col xs={24} md={8}>
                        <img
                            src={HowItWorks1}
                            style={styles.imageStyle}
                            alt={'signInStrava'}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <Card
                            number={'01'}
                            text={
                                `Create or join your company team by signing into your
                                Strava account. Come back on Cycle2Work landing page.`
                            }
                            style={styles.boxCardStyle}
                            title={'Sign into Strava App'}
                        />
                    </Col>
                </Row>
                <Row
                    style={styles.rowStyle}
                    type={'flex'}
                    justify='space-around'
                >
                    <Col xs={24} md={8}>
                        <Card
                            number={'02'}
                            text={
                                `Click ont he "JOIN NOW" button below to connect your
                                strava team to the Cycle2Work programme.`
                            }
                            style={styles.boxCardStyle}
                            title={'Join Cycle2Work'}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <img
                            src={HowItWorks2}
                            style={styles.imageStyle}
                            alt={'joinCycle2Work'}
                        />
                    </Col>
                </Row>
                <Row
                    style={styles.rowStyle}
                    type={'flex'}
                    justify='space-around'
                >
                    <Col xs={24} md={8}>
                        <img
                            src={HowItWorks3}
                            style={styles.imageStyle}
                            alt={'startCycling'}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <Card
                            number={'03'}
                            text={
                                `Track your cycling commutes and measure your carbon
                                footprint reduction. Data can easily be exported for
                                your company to create a variety of reward schemes, from
                                travel reimbursements to prizes and other incentives`
                            }
                            style={styles.boxCardStyle}
                            title={'Start cycling!'}
                        />
                    </Col>
                </Row>
            </Row>
        );
    }

}
