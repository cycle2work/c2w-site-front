import { Row, Col } from "antd";
import React, { Component } from "react";

import * as colors from "../../commons/colors";
import Button from "../button";

import styled from "styled-components";
import { style } from "./style";
import "./style.css";
import { FormattedMessage } from "react-intl";

const HelpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;

    @media screen and (max-width: 1200px) {
        align-items: flex-start;
    }
`;

export default class Footer extends Component {
    sendEmail() {
        window.location = "mailto:info@mondora.com";
    }

    render() {
        return (
            <div id="contacts" style={style.footerWrp}>
                <div style={style.footer}>
                    <Row gutter={16} type="flex" style={style.customRow}>
                        <Col xs={24} md={12} style={style.footerCol}>
                            <div className="textWrp">
                                <strong>
                                    {`Made with ❤ in Valtellina by Mondora`} <br />
                                    {`Via Umberto Visconti di Modrone 33, 20122 Milano`}
                                    <br />
                                </strong>
                            </div>
                        </Col>
                        <Col xs={24} md={6} style={style.footerCol}>
                            <div className="textWrp">
                                <a
                                    href="/#/privacy"
                                    style={{ color: colors.lighterGrey }}
                                    target="_blank"
                                >
                                    <strong>{"Privacy policy"}</strong>
                                </a>
                                <br />
                                <span>
                                    <strong>{"Email. "}</strong>
                                    <a
                                        href="mailto:info@cycle2work.io"
                                        style={{ color: colors.lighterGrey }}
                                    >
                                        {"info@cycle2work.io"}
                                    </a>
                                </span>
                                <br />
                                <span>
                                    <strong>{"Tel: "}</strong>
                                    <a
                                        href="tel:+3903421856264"
                                        style={{ color: colors.lighterGrey }}
                                    >
                                        {"+39 0342 1856 264 "}
                                    </a>
                                </span>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={6} style={style.footerCol}>
                            <HelpContainer>
                                <Button
                                    backgroundColor={colors.primaryColor}
                                    label={<FormattedMessage id="footer.help.button" />}
                                    onClick={this.sendEmail}
                                    textColor={colors.white}
                                />
                                <img height={32} src="strava.svg" alt="Powered by Strava" />
                            </HelpContainer>
                        </Col>
                    </Row>
                </div>
                <div style={style.bottomFooterWrp}>
                    <Row gutter={30} style={style.footer}>
                        <Col xs={24}>
                            <p style={{ margin: "0" }}>
                                {`© Copyright ${new Date().getFullYear()} - Mondora s.r.l. - Cycle2Work
                                    IT03680680968. All rights reserved.`}
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
