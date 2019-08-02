import { Col } from "antd";
import PropTypes from "prop-types";
import React, { Component } from "react";

import * as colors from "../../commons/colors";

export default class Card extends Component {
    static propTypes = {
        icon: PropTypes.string,
        lg: PropTypes.number,
        md: PropTypes.number,
        text: PropTypes.string,
        title: PropTypes.string,
        xs: PropTypes.number,
        children: PropTypes.node
    };

    render() {
        const { icon, lg, md, text, title, xs, children } = this.props;
        return (
            <Col lg={lg} xs={xs} md={md}>
                <div
                    style={{
                        backgroundColor: colors.white,
                        borderRadius: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minHeight: 250,
                        margin: 20,
                        padding: 20,
                        WebkitBoxShadow: "0px 8px 60px -9px rgba(28, 27, 41, 0.3)",
                        MozBoxShadow: "0px 8px 60px -9px rgba(28, 27, 41, 0.3)",
                        boxShadow: "0px 8px 60px -9px rgba(28, 27, 41, 0.3)"
                    }}
                >
                    {title && (
                        <>
                            <img alt={"fact"} style={{ height: "calc(65px + 1vw)" }} src={icon} />
                            <div
                                style={{
                                    fontSize: "calc(22px + 0.3vw)",
                                    fontWeight: 500,
                                    color: colors.black
                                }}
                            >
                                {title}
                            </div>
                        </>
                    )}

                    <div
                        style={{
                            fontSize: "calc(14px + 0.3vw)",
                            textAlign: "center",
                            color: colors.grey
                        }}
                    >
                        {text || children}
                    </div>
                </div>
            </Col>
        );
    }
}
