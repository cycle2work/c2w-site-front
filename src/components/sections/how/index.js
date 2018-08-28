import { Col, Row } from "antd";
import React, { Component } from "react";

import HowItWorks1 from "../../../assets/images/howitworks_01.png";
import HowItWorks2 from "../../../assets/images/howitworks_02.png";
import HowItWorks3 from "../../../assets/images/howitworks_03.png";
import Line1 from "../../../assets/images/line1.svg";
import Line2 from "../../../assets/images/line2.svg";

import Card from "./card";
import { white, black } from "../../../commons/colors";

const styles = {
    headerStyle: {
        textAlign: "center",
        paddingBottom: 30
    },
    boxCardStyle: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        margin: 15
    },
    rowStyle: {
        textAlign: "center"
    },
    containerWrp: {
        background: white,
        paddingTop: 100
    },
    container: {
        maxWidth: 1200,
        margin: "0px auto 150px auto"
    },
    line: {
        position: "absolute",
        maxWidth: 480,
        left: "calc(50% - 240px)"
    }
};

export default class How extends Component {
    render() {
        return (
            <div id="howItWorks" style={styles.containerWrp}>
                <div style={styles.container}>
                    <h2
                        style={{
                            fontSize: "calc(22px + 0.8vw)",
                            color: black,
                            textAlign: "center"
                        }}
                    >
                        {"How it works"}
                    </h2>
                    <div className="cardWrp" style={{ marginTop: 40 }}>
                        <Row type="flex" justify="space-around" style={styles.rowStyle}>
                            <Col xs={{ span: 24, order: 2 }} md={{ span: 8, order: 1 }}>
                                <img
                                    src={HowItWorks1}
                                    className="imageStyle"
                                    alt={"signInStrava"}
                                />
                            </Col>
                            <Col xs={{ span: 24, order: 1 }} md={{ span: 8, order: 2 }}>
                                <Card
                                    number={"01"}
                                    text={`Create or join your company team by signing into your
                                        Strava account. Come back on Cycle2Work landing page.`}
                                    style={styles.boxCardStyle}
                                    title={"Sign into Strava App"}
                                />
                            </Col>
                        </Row>
                    </div>
                    <img src={Line1} style={styles.line} className="dashedLines" alt={""} />
                    <div className="cardWrp">
                        <Row style={styles.rowStyle} type={"flex"} justify="space-around">
                            <Col xs={{ span: 24, order: 1 }} md={{ span: 8, order: 1 }}>
                                <Card
                                    number={"02"}
                                    text={`Click on the "JOIN" button below to connect your
                                        strava team to the Cycle2Work programme.`}
                                    style={styles.boxCardStyle}
                                    title={"Join Cycle2Work"}
                                />
                            </Col>
                            <Col xs={{ span: 24, order: 2 }} md={{ span: 8, order: 2 }}>
                                <img
                                    src={HowItWorks2}
                                    className="imageStyle"
                                    alt={"join Cycle2Work"}
                                />
                            </Col>
                        </Row>
                    </div>
                    <img src={Line2} style={styles.line} className="dashedLines" alt={""} />
                    <div className="cardWrp">
                        <Row style={styles.rowStyle} type={"flex"} justify="space-around">
                            <Col xs={{ span: 24, order: 2 }} md={{ span: 8, order: 1 }}>
                                <img
                                    src={HowItWorks3}
                                    className="imageStyle"
                                    alt={"startCycling"}
                                />
                            </Col>
                            <Col xs={{ span: 24, order: 1 }} md={{ span: 8, order: 2 }}>
                                <Card
                                    number={"03"}
                                    text={`Track your cycling commutes and measure your carbon
                                        footprint reduction. Data can easily be exported for
                                        your company to create a variety of reward schemes, from
                                        travel reimbursements to prizes and other incentives`}
                                    style={styles.boxCardStyle}
                                    title={"Start cycling!"}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
