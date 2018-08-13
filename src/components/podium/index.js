import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Col, Row } from "antd";

import Position from "./position";

const First = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    height: 60px;
    @media screen and (max-width: 991px) {
        display: none;
    }
`;
const Second = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    height: 20px;
    @media screen and (max-width: 991px) {
        display: none;
    }
`;
const Third = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    height: 0;
    @media screen and (max-width: 991px) {
        display: none;
    }
`;

export default class Podium extends Component {
    static propTypes = {
        reports: PropTypes.shape({
            data: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number,
                    profile: PropTypes.string,
                    distance: PropTypes.number
                })
            )
        })
    };

    render() {
        const [first, second, third] = this.props.reports.data.sort(
            (a, b) => (a.distance > b.distance ? -1 : 1)
        );

        if (!first && !second && !third) {
            return null;
        }

        return (
            <Col xs={18} offset={3}>
                <Row type="flex" align="bottom">
                    <Col xs={{ span: 24, order: 2 }} md={{ span: 8, order: 1 }}>
                        <Position position="2°" company={second} />
                        <Second />
                    </Col>
                    <Col xs={{ span: 24, order: 1 }} md={{ span: 8, order: 2 }}>
                        <Position position="1°" company={first} />
                        <First />
                    </Col>
                    <Col xs={{ span: 24, order: 3 }} md={{ span: 8, order: 3 }}>
                        <Position position="3°" company={third} />
                        <Third />
                    </Col>
                </Row>
            </Col>
        );
    }
}
