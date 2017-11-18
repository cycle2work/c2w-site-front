import {Col, Row} from "antd";

import PropTypes from "prop-types";
import React, { Component } from "react";

import JoinNow from "../../join-now";

import { style } from "./style";
import "./style.css";
import Cyclist from "../../../assets/images/cyclist.png";

export default class StandingsSection extends Component {

    static propTypes = {
        reports: PropTypes.shape({
            data: PropTypes.array
        })
    };

    constructor() {
        super();
        this.state = {
            addTransition: ""
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    getDocHeight() {
        const D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        ) - 1200;
    }

    handleScroll() {
        const topPage = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (topPage > this.getDocHeight()) {
            this.setState({
                addTransition: "addTransition80"
            });
        } else {
            this.setState({
                addTransition: ""
            });
        }
    }

    render () {
        return (
            <div id="standings" style={style.container}>
                <Row gutter={30} style={style.customRow}>
                    <Col xs={24}>
                        <h2 style={style.sectionTitle}>{"Company Standings"}</h2>
                        <div style={style.graphWrp}>
                            <ul className="y-axis">
                                <li style={style.li}><span>{"10"}</span></li>
                                <li style={style.li}><span>{"20"}</span></li>
                                <li style={style.li}><span>{"30"}</span></li>
                                <li style={style.li}><span>{"40"}</span></li>
                                <li style={style.li}><span>{"50"}</span></li>
                            </ul>
                            <div style={style.graph}>
                                <div style={style.graphLine} className={`bgLine1 ${this.state.addTransition}`}>
                                    {"Company 1"}
                                    <img src={Cyclist} alt={"Cyclist"} style={style.cyclist} />
                                </div>
                                <div style={style.graphLine} className={`bgLine2 ${this.state.addTransition}`}>
                                    {"Company 2"}
                                    <img src={Cyclist} alt={"Cyclist"} style={style.cyclist} />
                                </div>
                                <div style={style.graphLine} className={`bgLine3 ${this.state.addTransition}`}>
                                    {"Company 3"}
                                    <img src={Cyclist} alt={"Cyclist"} style={style.cyclist} />
                                </div>
                                <div style={style.graphLine} className={`bgLine4 ${this.state.addTransition}`}>
                                    {"Company 4"}
                                    <img src={Cyclist} alt={"Cyclist"} style={style.cyclist} />
                                </div>
                                <div style={style.graphLine} className={`bgLine5 ${this.state.addTransition}`}>
                                    {"Company 5"}
                                    <img src={Cyclist} alt={"Cyclist"} style={style.cyclist} />
                                </div>
                            </div>
                            <ul className="x-axis">
                                <li><span>{"5"}</span></li>
                                <li><span>{"10"}</span></li>
                                <li><span>{"20"}</span></li>
                                <li><span>{"30"}</span></li>
                                <li><span>{"40"}</span></li>
                                <li><span>{"50"}</span></li>
                                <li><span>{"60"}</span></li>
                                <li><span>{"70"}</span></li>
                            </ul>
                        </div>
                        <JoinNow />
                    </Col>
                </Row>
            </div>
        );
    }
}
