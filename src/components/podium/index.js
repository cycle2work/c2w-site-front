import React, { Component } from "react";
import PropTypes from "prop-types";

import { Col, Row } from "antd";

import Position from "./position";

import { style } from "./style";

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
        const [first, second, third] = this.props.reports.data.sort((a, b) => a.distance > b.distance ? -1 : 1);

        if (!first && !second && !third) {
            return null;
        }

        return (
            <Col xs={18} offset={3} style={style.container}>
                <Row>
                    <Col md={8} style={style.second}>
                        <Position position="2°" company={second} />
                    </Col>
                    <Col md={8} style={style.first}>
                        <Position position="1°" company={first} />
                    </Col>
                    <Col md={8} style={style.third}>
                        <Position position="3°" company={third} />
                    </Col>
                </Row>
            </Col>
        );
    }
}
