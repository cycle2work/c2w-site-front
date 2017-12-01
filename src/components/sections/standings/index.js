import {Col, Row} from "antd";

import PropTypes from "prop-types";
import React, { Component } from "react";

import JoinNow from "../../join-now";
import Podium from "../../podium";

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
            reports: []
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

        const sorted = this.props.reports.data.sort((a, b) => a.distance > b.distance ? -1 : 1);
        const [max] = sorted;

        if (topPage > this.getDocHeight()) {

            const mapped = sorted.map(report => {
                return {
                    ...report,
                    percentage: Math.ceil(Math.floor(100 * report.distance / max.distance) / 10) * 10
                };
            });

            this.setState({ reports: mapped });

        } else {

            const mapped = sorted.map(report => {
                return {
                    ...report,
                    percentage: 0
                };
            });

            this.setState({ reports: mapped });
        }
    }

    render() {

        const { reports } = this.state;

        return (
            <div id="standings" style={style.container}>
                <Row gutter={30} style={style.customRow}>
                    <Col xs={24}>
                        <h2 style={style.sectionTitle}>
                            {"Top 3 companies"}
                        </h2>
                        <Podium reports={this.props.reports} />
                    </Col>    
                    <Col xs={24}>
                        <div style={style.graphWrp}>
                            <ul className="y-axis">
                                {reports.map((report, index) => (
                                    <li style={style.li} key={index}>
                                        <span>{++index}</span>
                                    </li>
                                ))}
                            </ul>
                            <div style={style.graph}>
                                {reports.reverse().map((report, index) => (
                                    <div
                                        key={report.id}
                                        style={style.graphLine}
                                        className={`bgLine${++index} addTransition${report.percentage}`}
                                    >
                                        {report.name}
                                        <img src={Cyclist} alt={"Cyclist"} style={style.cyclist} />
                                    </div>
                                ))}
                            </div>
                            <ul className="x-axis">
                                {reports.map((report, index) => (
                                    <li style={style.li} key={index}>
                                        <span>{++index}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <JoinNow />
                    </Col>
                </Row>
            </div>
        );
    }
}
