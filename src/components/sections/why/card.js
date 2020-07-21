import React, { Component } from "react";
import { black, grey } from "../../../commons/colors";

import PropTypes from "prop-types";

export default class Card extends Component {
    static propTypes = {
        icon: PropTypes.string,
        style: PropTypes.object,
        text: PropTypes.node,
        title: PropTypes.node
    };

    render() {
        const { icon, style, text, title } = this.props;
        return (
            <div style={style}>
                {icon ? (
                    <img
                        alt={icon}
                        style={{ height: "calc(65px + 1vw)", marginBottom: 8 }}
                        src={icon}
                    />
                ) : null}
                <div
                    style={{
                        fontSize: "calc(14px + 0.5vw)",
                        fontWeight: 500,
                        color: black,
                        marginBottom: 12
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        fontSize: "calc(14px + 0.3vw)",
                        textAlign: "center",
                        color: grey
                    }}
                >
                    {text}
                </div>
            </div>
        );
    }
}
