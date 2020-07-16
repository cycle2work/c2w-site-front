import { Row, Col } from "antd";
import React, { Component } from "react";

import JoinImage from "../../../assets/images//bg_join.png";

import Card from "./card";
import { style } from "./style";
import "./style.css";
import { FormattedMessage } from "react-intl";

export default class Join extends Component {
    render() {
        return (
            <div id="join" style={style.container} className="bgMobile">
                <div style={style.titleWrp}>
                    <h2 style={style.sectionTitle}>
                        <FormattedMessage id="section.join.title" />
                    </h2>
                </div>
                <Row type="flex" justify="space-around" style={style.row}>
                    <Col
                        xs={{ span: 24, order: 2 }}
                        md={{ span: 14, order: 1 }}
                        style={style.imageContainer}
                    >
                        <img
                            alt="Join Now"
                            src={JoinImage}
                            style={style.image}
                            className="bgImageJoin"
                        />
                    </Col>
                    <Col xs={{ span: 24, order: 1 }} md={{ span: 10, order: 2 }}>
                        <Card />
                    </Col>
                </Row>
            </div>
        );
    }
}
