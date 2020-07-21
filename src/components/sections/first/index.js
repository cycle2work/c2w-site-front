import { Row, Col } from "antd";
import React, { Component } from "react";

import JoinNow from "../../join-now";

import homeCyclist from "../../../assets/images/home_cyclist2.png";
import { style } from "./style";
import "./style.css";
import { FormattedMessage } from "react-intl";

export default class FirstSection extends Component {
    render() {
        return (
            <div id="firstSection" className="containerTeaser">
                <Row style={style.contentRow}>
                    <Col lg={12} md={10} xs={24}>
                        <div className="teaserTextWrp">
                            <h1 style={style.sectionTitle}>
                                <FormattedMessage id="section.first.title" />
                            </h1>
                            <h2 style={style.sectionSubtitle}>
                                <FormattedMessage id="section.first.subtitle" />
                            </h2>
                            <div style={style.paragraph}>
                                <FormattedMessage id="section.first.body.1" />
                                <br />
                                <FormattedMessage id="section.first.body.2" />
                            </div>
                            <JoinNow />
                        </div>
                    </Col>
                    <Col lg={12} md={10} xs={24}>
                        <div className="teaserImageWrp" style={style.imageWrp}>
                            <img alt={"cyclist"} src={homeCyclist} className="teaserImage" />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
