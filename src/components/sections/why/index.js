import {Col, Row} from 'antd';
import React, {Component} from 'react';

import Workers from '../../../assets/images/icons/icon_workers.svg';
import Community from '../../../assets/images/icons/icon_community.svg';
import Leaf from '../../../assets/images/icons/icon_leaf.svg';

import Card from './card';
import {white} from '../../../commons/colors';

const styles = {
    headerCardStyle: {
        align: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 800
    },
    boxCardStyle: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 250,
        width: 300
    },
    rowStyle: {
        textAlign: 'center',
        paddingBottom: 30
    },
    containerStyle: {
        background: white,
        marginTop: '20px',
        maxWidth: 1800
    }
};

export default class Why extends Component {

    render () {
        return (
            <Row style={styles.containerStyle}>
                <Row
                    style={styles.rowStyle}
                    type={'flex'}
                    justify={'center'}
                >
                    <Card
                        text={
                            `Cycle2Work was created by the mondora team as a way
                                of rewarding workers who choose to commute by bicycle.
                                We are creating positive impact for:`
                        }
                        style={styles.headerCardStyle}
                        title={'Why'}
                    />
                </Row>
                <Row
                    style={styles.rowStyle}
                    type={'flex'}
                    justify={'center'}
                >
                    <Col xs={24} md={8}>
                        <Card
                            icon={Workers}
                            style={styles.boxCardStyle}
                            text={
                                `various studies claim cycling reduces stress levels
                                and the risk of certain diseases, thus improving overall
                                health and wellbeing for employees`
                            }
                            title={'Workers'}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <Card
                            icon={Leaf}
                            style={styles.boxCardStyle}
                            text={
                                `cycling is an eco-friendly means of travel and reduces
                                the carbon footprint of commuting to work, as well as
                                reducing traffic congestion`
                            }
                            title={'Environment'}
                        />
                    </Col>
                    <Col xs={24} md={8}>
                        <Card
                            icon={Community}
                            style={styles.boxCardStyle}
                            text={
                                `local bycicle shops see a rise in sales as more colleagues
                                joins the programme. Earned travel reimbursements are
                                    paid out as gift cards for use in bycicle shops`
                            }
                            title={'Local community'}
                        />
                    </Col>
                </Row>
            </Row>
        );
    }

}
