import {Col, Row} from "antd";

import PropTypes from "prop-types";
import React, { Component } from "react";

import Button from "../../button";
import StandingsTable from "../../standings-table";

import * as colors from "../../../commons/colors";
import {style} from "./style";

const dataTable1 = [{
    key: "1",
    position: "1",
    company: "Company Name1",
    km: "168,7 km",
    co2: "x Co2"
}, {
    key: "2",
    position: "2",
    company: "Company Name2",
    km: "155,1 km",
    co2: "x Co2"
}, {
    key: "3",
    position: "3",
    company: "Company Name3",
    km: "120,5 km",
    co2: "x Co2"
}];

const dataTable2 = [{
    key: "34",
    position: "34",
    company: "Company Name34",
    km: "55,5 km",
    co2: "x Co2"
}, {
    key: "35",
    position: "35",
    company: "Company Name35",
    km: "42,3 km",
    co2: "x Co2",
    mineCompany: true
}, {
    key: "36",
    position: "36",
    company: "Company Name36",
    km: "32,9 km",
    co2: "x Co2"
}];

export default class StandingsSection extends Component {

    static propTypes = {
        reports: PropTypes.shape({
            data: PropTypes.array
        })
    };

    state = {
        dataTable1,
        dataTable2
    };

    onSearch = (index) => {
        const {searchText} = this.state;
        const reg = new RegExp(searchText, "gi");
        this.setState({
            data: dataTable1.map((record) => {
                const match = record.company.match(reg);
                if (!match) {
                    return null;
                }
                return {
                    ...record,
                    company: (
                        <span>
                            {record.company.split(reg).map((text, i) => (
                                i > 0 ? [
                                    <span key={index} className="highlight">
                                        {match[0]}
                                    </span>,
                                    text
                                ] : text
                            ))}
                        </span>
                    )
                };
            }).filter(record => !!record)
        });
    }

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
                        <Button
                            backgroundColor={colors.primaryColor}
                            label={"JOIN NOW"}
                            onClick={() => { }}
                            textColor={colors.white}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
