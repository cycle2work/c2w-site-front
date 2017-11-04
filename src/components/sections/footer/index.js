import {Row, Col} from "antd";
import React, {Component} from "react";

import * as colors from "../../../commons/colors";
import Button from "../../Button";

import {style} from "./style";
import "./style.css";

export default class Footer extends Component {
    sendEmail () {
        window.location = "mailto:info@entova.it";
    }

    render () {
        return (
            <div id="contacts" style={style.footerWrp}>
                <div style={style.footer}>
                    <Row gutter={14} style={style.customRow}>
                        <Col xs={24} md={12} style={style.footerCol}>
                            <div className="textWrp">
                                <strong>
                                    {`mondora S.r.l. società soggetta
                                        all’attività di direzione e coordinamento di TeamSystem S.p.A. -
                                        Sede: Via Umberto Visconti di Modrone 33, 20122 Milano`}
                                    <br />
                                </strong>
                            </div>
                        </Col>
                        <Col xs={24} md={6} style={style.footerCol}>
                            <div className="textWrp">
                                <a
                                    href="/#/privacy"
                                    style={{color: colors.lighterGrey}}
                                    target="_blank"
                                >
                                    <strong>{"Privacy Policy"}</strong>
                                </a>
                                <br />
                                <span>
                                    <strong>{"Email. "}</strong>
                                    <a href="mailto:info@cycle2work.io" style={{color: colors.lighterGrey}}>
                                        {"info@cycle2work.io"}
                                    </a>
                                </span>
                                <br />
                                <span>
                                    <strong>{"Tel: "}</strong>
                                    <a href="tel:+3903421856264" style={{color: colors.lighterGrey}}>
                                        {"+39 0342 1856 264 "}
                                    </a>
                                </span>
                            </div>
                        </Col>
                        <Col
                            xs={24}
                            sm={12}
                            md={6}
                            style={style.footerCol}
                        >
                            <div className="buttonWrp">
                                <Button
                                    backgroundColor={colors.primaryColor}
                                    label={"SERVE AIUTO ?"}
                                    onClick={this.sendEmail}
                                    textColor={colors.white}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={style.bottomFooterWrp}>
                    <Row gutter={30} style={style.footer}>
                        <Col xs={24}>
                            <p style={{margin: "0"}}>
                                {`© Copyright 2017 - mondora S.r.l. - Cycle2Work
                                    Partita Iva 03680680968. Tutti i diritti riservati`}
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
