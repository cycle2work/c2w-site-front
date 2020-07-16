import React, { Component } from "react";

import Card from "../../fact-card";
import { Row } from "antd";

import bike from "../../../assets/images/icons/icon_bike.svg";
import calendar from "../../../assets/images/icons/icon_calendar.svg";
import heart from "../../../assets/images/icons/icon_heart.svg";
import world from "../../../assets/images/icons/icon_world.svg";

import { style } from "./style";
import { FormattedMessage } from "react-intl";

export default class FactsAndFigures extends Component {
    render() {
        return (
            <div id="factsAndFigures" style={style.container}>
                <Row style={style.customRow}>
                    <h2 style={style.sectionTitle}>
                        <FormattedMessage id="section.facts.title" />
                    </h2>
                    <Row>
                        <Card
                            icon={bike}
                            lg={6}
                            md={12}
                            text={<FormattedMessage id="section.facts.length.body" />}
                            title={<FormattedMessage id="section.facts.length.title" />}
                            xs={24}
                        />
                        <Card
                            icon={calendar}
                            lg={6}
                            md={12}
                            text={<FormattedMessage id="section.facts.co2.body" />}
                            title={<FormattedMessage id="section.facts.co2.title" />}
                            xs={24}
                        />
                        <Card
                            icon={world}
                            lg={6}
                            md={12}
                            text={<FormattedMessage id="section.facts.offset.body" />}
                            title={<FormattedMessage id="section.facts.offset.title" />}
                            xs={24}
                        />
                        <Card
                            icon={heart}
                            lg={6}
                            md={12}
                            text={<FormattedMessage id="section.facts.health.body" />}
                            title={<FormattedMessage id="section.facts.health.title" />}
                            xs={24}
                        />
                    </Row>
                </Row>
            </div>
        );
    }
}
