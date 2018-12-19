import { Col, Row } from "antd";

import PropTypes from "prop-types";
import React, { Component } from "react";

import sortby from "lodash.sortby";

import JoinNow from "../../join-now";
import StandingsTable from "../../standings-table";
import Podium from "../../podium";

import { style } from "./style";
import "./style.css";

export default class StandingsSection extends Component {
    static propTypes = {
        reports: PropTypes.shape({
            data: PropTypes.array
        })
    };

    render() {
        const {
            reports,
            reports: { data }
        } = this.props;
        const sorted = sortby(data, ["distance", "name"]).reverse();
        const standingsData = (sorted || []).map((report, index) => {
            return {
                key: `${index}`,
                position: `${index + 1}°`,
                company: report.name,
                km: `${Math.round(report.distance / 1000)}`,
                co2: `${(report.distance / 600000).toFixed(2)}`,
                mineCompany: true
            };
        });

        return (
            <div id="standings" style={style.container}>
                <Row gutter={30} style={style.customRow}>
                    <Col xs={24}>
                        <h2 style={style.sectionTitle}>{"Top 3 companies"}</h2>
                        <Podium reports={reports} />
                    </Col>
                    <Col xs={24}>
                        <div style={style.tableWrp}>
                            <StandingsTable title={"Top green Companies"} data={standingsData} />
                        </div>
                        <JoinNow />
                    </Col>
                </Row>
            </div>
        );
    }
}
