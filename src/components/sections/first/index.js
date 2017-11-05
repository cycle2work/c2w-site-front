import { Row, Col } from "antd";
import React, { Component } from "react";

import JoinNow from "../../join-now";

import homeCyclist from "../../../assets/images/home_cyclist2.png";
import { style } from "./style";
import "./style.css";

export default class FirstSection extends Component {

    render () {
        return (
            <div id="firstSection" className="containerTeaser">
                <Row style={style.contentRow}>
                    <Col lg={12} md={10} xs={24}>
                        <div className="teaserTextWrp">
                            <h1 style={style.sectionTitle}>{"Cycle2Work"}</h1>
                            <h2 style={style.sectionSubtitle}>{"For a helthier, happier world"}</h2>
                            <div style={style.paragraph}>
                                {"Want to improve your health and your planet?"}
                                <br />
                                {"Cycle2Work is here to help! Simply create a company team on Strava, connect to Cycle2Work and start reducing your carbon footprint today."}
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
