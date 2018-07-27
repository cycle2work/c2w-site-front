import { Table } from "antd";
import PropTypes from "prop-types";
import React, { Component } from "react";

const columns = [
    //todo make it dynamics
    {
        title: "",
        dataIndex: "position",
        key: "position"
    },
    {
        title: "Company",
        dataIndex: "company",
        key: "company"
    },
    {
        title: "Km",
        dataIndex: "km",
        key: "km"
    },
    {
        title: "Kg/CO2",
        dataIndex: "co2",
        key: "co2"
    }
];

export default class StandingsTable extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.shape({
                key: PropTypes.string,
                position: PropTypes.string,
                company: PropTypes.string,
                km: PropTypes.string,
                co2: PropTypes.string,
                mineCompany: PropTypes.bool
            })
        ),
        title: PropTypes.string
    };

    static defaultProps = {
        data: []
    };

    render() {
        const { data, title } = this.props;
        return (
            <Table
                bordered={false}
                columns={columns}
                dataSource={data}
                dropdownPrefixCls={""}
                loading={false}
                onChange={() => {}}
                pagination={false}
                showHeader={true}
                size={"middle"}
                title={() => title}
            />
        );
    }
}
