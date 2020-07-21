import { Col, Row } from "antd";
import React, { Component } from "react";

import graph from "../../../assets/images/icons/icon_graph.svg";
import people from "../../../assets/images/icons/icon_people.svg";
import save from "../../../assets/images/icons/icon_save.svg";
import health from "../../../assets/images/icons/icon_health.svg";

import { style } from "./style";
import { FormattedMessage } from "react-intl";

export default class FeaturesSection extends Component {
    render() {
        return (
            <div style={style.container}>
                <Row gutter={30} id="features" style={style.featureBox}>
                    <Col xs={24}>
                        <h2 style={style.sectionTitle}>
                            <FormattedMessage id="section.features.title" />
                        </h2>
                        <Row gutter={30}>
                            <Col lg={6} sm={12} xs={24}>
                                <div style={style.iconBox}>
                                    <img
                                        alt={"graph"}
                                        style={{ height: 80, marginBottom: 8 }}
                                        src={graph}
                                    />
                                    <p style={style.paragraph}>
                                        <FormattedMessage id="section.features.connection" />
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6} sm={12} xs={24}>
                                <div style={style.iconBox}>
                                    <img
                                        alt={"people"}
                                        style={{ height: 80, marginBottom: 8 }}
                                        src={people}
                                    />
                                    <p style={style.paragraph}>
                                        <FormattedMessage id="section.features.team" />
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6} sm={12} xs={24}>
                                <div style={style.iconBox}>
                                    <img
                                        alt={"save"}
                                        style={{ height: 80, marginBottom: 8 }}
                                        src={save}
                                    />
                                    <p style={style.paragraph}>
                                        <FormattedMessage id="section.features.prizes" />
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6} sm={12} xs={24}>
                                <div style={style.iconBox}>
                                    <img
                                        alt={"healt"}
                                        style={{ height: 80, marginBottom: 8 }}
                                        src={health}
                                    />
                                    <p style={style.paragraph}>
                                        <FormattedMessage id="section.features.health" />
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
