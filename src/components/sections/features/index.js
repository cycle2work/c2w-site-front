import {Col, Row} from 'antd';
import React, {Component} from 'react';

import graph from '../../../assets/images/icons/icon_graph.svg';
import people from '../../../assets/images/icons/icon_people.svg';
import save from '../../../assets/images/icons/icon_save.svg';
import health from '../../../assets/images/icons/icon_health.svg';


export default class FeaturesSection extends Component {

    render () {
        return (
            <div style={{marginTop: "20px"}}>
                <Row>
                    <h2>{'Features'}</h2>
                </Row>
                <Row>
                    <Col md={6} xs={24}>
                        <Row>
                            <img
                                style={{height: 80}}
                                src={graph}
                            />
                        </Row>
                        <Row>{'testo1'}</Row>
                    </Col>
                    <Col md={6} xs={24}>
                        <Row>
                            <img
                                style={{height: 80}}
                                src={people}
                            />
                        </Row>
                        <Row>{'testo2'}</Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={24}>
                        <Row>
                            <img
                                style={{height: 80}}
                                src={save}
                            />
                        </Row>
                        <Row>{'testo3'}</Row>
                    </Col>
                    <Col md={6} xs={24}>
                        <Row>
                            <img
                                style={{height: 80}}
                                src={health}
                            />
                        </Row>
                        <Row>{'testo4'}</Row>
                    </Col>
                </Row>
            </div>
        );
    }
}