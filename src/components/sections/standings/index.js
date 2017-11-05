import {Col, Row} from "antd";

import PropTypes from "prop-types";
import React, { Component } from "react";

import JoinNow from "../../join-now";
import StandingsTable from "../../standings-table";

import { style } from "./style";

export default class StandingsSection extends Component {

    static propTypes = {
        reports: PropTypes.shape({
            data: PropTypes.array
        })
    };

    render () {
        const { reports: { data } } = this.props;
        const standingsData = (data || []).map((report, index) => {
            return {
                key: `${index}`,
                position: `${index}`,
                company: report.name,
                km: `${Math.round(report.distance)}`,
                co2: `${report.distance * 1.25}`,
                mineCompany: true
            };
        });
        return (
            <div id="standings" style={style.container}>
                <Row gutter={30} style={style.customRow}>
                    <Col xs={24}>
                        <h2 style={style.sectionTitle}>{"Company Standings"}</h2>
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
