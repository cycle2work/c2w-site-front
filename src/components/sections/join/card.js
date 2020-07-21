import { Icon } from "antd";
import React, { Component } from "react";

import JoinNow from "../../join-now";

import { style } from "./style";
import "./style.css";
import { FormattedMessage } from "react-intl";

export default class Card extends Component {
    render() {
        return (
            <div style={style.box} className="cardJoin">
                <div style={{ position: "relative" }}>
                    <Icon style={style.icon} type="check-circle-o" />
                    <p style={style.paragraph}>
                        <FormattedMessage id="section.join.environment" />
                    </p>
                </div>
                <div style={{ position: "relative" }}>
                    <Icon style={style.icon} type="check-circle-o" />
                    <p style={style.paragraph}>
                        <FormattedMessage id="section.join.workers" />
                    </p>
                </div>
                <div style={{ position: "relative" }}>
                    <Icon style={style.icon} type="check-circle-o" />
                    <p style={style.paragraph}>
                        <FormattedMessage id="section.join.excercise" />
                    </p>
                </div>
                <div style={{ position: "relative" }}>
                    <Icon style={style.icon} type="check-circle-o" />
                    <p style={style.paragraph}>
                        <FormattedMessage id="section.join.co2" />
                    </p>
                </div>
                <div style={style.button}>
                    <JoinNow />
                </div>
            </div>
        );
    }
}
