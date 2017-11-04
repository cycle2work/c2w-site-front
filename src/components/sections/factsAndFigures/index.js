import React, {Component} from "react";

import Card from "../../FactCard/index";
import {Row} from "antd";

import bike from "../../../assets/images/icons/icon_bike.svg";
import calendar from "../../../assets/images/icons/icon_calendar.svg";
import heart from "../../../assets/images/icons/icon_heart.svg";
import world from "../../../assets/images/icons/icon_world.svg";

import {style} from "./style";

export default class FactsAndFigures extends Component {

    render () {
        return (
            <div id="factsAndFigures" style={style.container} >
                <Row style={style.customRow}>
                    <h2 style={style.sectionTitle}>
                        {"Facts and Figures"}
                    </h2>
                    <Row>
                        <Card
                            icon={bike}
                            lg={6}
                            md={12}
                            text={"average length of employee commute per day"}
                            title={"35 km"}
                            xs={24}
                        />
                        <Card
                            icon={calendar}
                            lg={6}
                            md={12}
                            text={"CO2 per person per day generated through commuting"}
                            title={"4.32 kg"}
                            xs={24}
                        />
                        <Card
                            icon={world}
                            lg={6}
                            md={12}
                            text={"CO2 per person per year offset by cycling"}
                            title={"1 tonne"}
                            xs={24}
                        />
                        <Card
                            icon={heart}
                            lg={6}
                            md={12}
                            text={"average health and wellbeing improvement from cycling"}
                            title={"40%"}
                            xs={24}
                        />
                    </Row>
                </Row>
            </div>
        );
    }

}
