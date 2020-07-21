import { Row, Col } from "antd";
import React, { Component } from "react";

import Workers from "../../../assets/images/icons/icon_workers.svg";
import Community from "../../../assets/images/icons/icon_community.svg";
import Leaf from "../../../assets/images/icons/icon_leaf.svg";

import Card from "./card";
import { style } from "./style";
import "./style.css";
import { FormattedMessage } from "react-intl";

export default class Why extends Component {
    render() {
        return (
            <div id="why" style={style.container}>
                <div style={style.titleWrp}>
                    <h2 style={style.sectionTitle}>
                        <FormattedMessage id="section.why.title" />
                    </h2>
                    <p style={style.paragraph}>
                        <FormattedMessage id="section.why.subtitle" />
                    </p>
                </div>
                <Row style={style.customRow}>
                    <Col xs={24} md={8}>
                        <div className="whyWrp">
                            <Card
                                icon={Workers}
                                text={<FormattedMessage id="section.why.workers.body" />}
                                title={<FormattedMessage id="section.why.workers.title" />}
                            />
                        </div>
                    </Col>
                    <Col xs={24} md={8}>
                        <div className="whyWrp">
                            <Card
                                icon={Leaf}
                                text={<FormattedMessage id="section.why.environment.body" />}
                                title={<FormattedMessage id="section.why.environment.title" />}
                            />
                        </div>
                    </Col>
                    <Col xs={24} md={8}>
                        <div className="whyWrp">
                            <Card
                                icon={Community}
                                text={<FormattedMessage id="section.why.community.body" />}
                                title={<FormattedMessage id="section.why.community.title" />}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
