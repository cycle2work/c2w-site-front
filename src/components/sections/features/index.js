import {Col, Row} from 'antd';
import React, {Component} from 'react';

import graph from '../../../assets/images/icons/icon_graph.svg';
import people from '../../../assets/images/icons/icon_people.svg';
import save from '../../../assets/images/icons/icon_save.svg';
import health from '../../../assets/images/icons/icon_health.svg';

import {style} from './style';


export default class FeaturesSection extends Component {

    render () {
        return (
            <div style={style.container}>
                <Row gutter={30} style={style.featureBox}>
                    <Col xs={24}>
                        <h2 style={style.sectionTitle}>{'Features'}</h2>
                        <Row gutter={30}>
                            <Col lg={6} sm={12} xs={24}>
                                <div style={style.iconBox}>
                                    <img
                                        alt={'graph'}
                                        style={{height: 80}}
                                        src={graph}
                                    />
                                    <p style={style.paragraph}>{'Connected to Strava & reduce your carbon footprint'}</p>
                                </div>
                            </Col>
                            <Col lg={6} sm={12} xs={24}>
                                <div style={style.iconBox}>
                                    <img
                                        alt={'people'}
                                        style={{height: 80}}
                                        src={people}
                                    />
                                    <p style={style.paragraph}>{'Team based application: view team data and compare yourself to other teams'}</p>
                                </div>
                            </Col>
                            <Col lg={6} sm={12} xs={24}>
                                <div style={style.iconBox}>
                                    <img
                                        alt={'save'}
                                        style={{height: 80}}
                                        src={save}
                                    />
                                    <p style={style.paragraph}>{'Easily set up travel reimbursements, prizes or other incentives'}</p>
                                </div>
                            </Col>
                            <Col lg={6} sm={12} xs={24}>
                                <div style={style.iconBox}>
                                    <img
                                        alt={'healt'}
                                        style={{height: 80}}
                                        src={health}
                                    />
                                    <p style={style.paragraph}>{'Improve employee health and reduce stress'}</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
