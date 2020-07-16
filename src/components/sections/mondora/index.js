import React, { Component } from "react";

import { Row, Col } from "antd";

import gradient from "../../../assets/images/gradient_mondora.png";
import mondoraLogo from "../../../assets/images/logo_mondora.png";
import { white, grey } from "../../../commons/colors";
import { FormattedMessage } from "react-intl";

export default class Mondora extends Component {
    render() {
        return (
            <Row
                type="flex"
                justify="center"
                gutter={32}
                style={{
                    backgroundImage: `url(${gradient})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "repeat-y",
                    paddingBottom: 60,
                    paddingTop: 60,
                    margin: "50px 0"
                }}
            >
                <Col xs={24}>
                    <div
                        style={{
                            margin: "auto",
                            maxWidth: 1000,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: white,
                            borderRadius: 10,
                            padding: "30px 0"
                        }}
                    >
                        <img
                            alt={"mondora-logo"}
                            style={{ marginTop: -110, width: "calc(100px + 3vw)" }}
                            src={mondoraLogo}
                        />
                        <p
                            style={{
                                fontSize: "calc(14px + 0.3vw)",
                                color: grey,
                                padding: 30,
                                textAlign: "center"
                            }}
                        >
                            <FormattedMessage id="section.mondora.body" />
                        </p>
                        {/* FIXME: the button does literally nothing, commenting out */}
                        {/* <Button
                            backgroundColor={secondaryColor}
                            label={<FormattedMessage id="section.mondora.body" />}
                            onClick={() => {}}
                            textColor={black}
                        /> */}
                    </div>
                </Col>
            </Row>
        );
    }
}
