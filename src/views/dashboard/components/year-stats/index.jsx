import React from "react";
import PropTypes from "prop-types";

import moment from "moment";
import styled from "styled-components";
import AnimatedNumber from "react-animated-number";

import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

import AnimatedContainer from "../../../../components/animated-container";

import BaseCard from "../cards/base-card";

import * as colors from "../../../../commons/colors";

const NumberContainer = styled.div`
    margin: 0 16px;
`;

const Number = styled.p`
    text-align: right;
    font-size: 3em;
    font-weight: 700;
    color: ${colors.black};
`;

const YearStats = ({ yearData }) => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const monthlyData = months.map(month => {
        const data = yearData.find(data => data.month === month) || { distance: 0 };
        return {
            ...month,
            ...data
        };
    });

    const yearTotal = monthlyData.reduce((sum, month) => sum + month.distance, 0);

    return (
        <AnimatedContainer>
            <BaseCard>
                <NumberContainer>
                    <Number>
                        <AnimatedNumber value={yearTotal / 1000} formatValue={n => n.toFixed(0)} />
                        <span>{" Km"}</span>
                    </Number>
                </NumberContainer>
                <ResponsiveContainer height="100%" width="100%">
                    <AreaChart
                        data={monthlyData}
                        margin={{
                            bottom: 0
                        }}
                    >
                        <Tooltip
                            cursor={false}
                            formatter={value => `${(value / 1000).toFixed(0)} Km`}
                            labelFormatter={value =>
                                moment()
                                    .month(value)
                                    .format("MMMM")
                            }
                        />

                        <Area
                            type="monotone"
                            dataKey="distance"
                            stroke={colors.primaryColor}
                            strokeWidth={0}
                            fill={colors.primaryColor}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </BaseCard>
        </AnimatedContainer>
    );
};

YearStats.propTypes = { yearData: PropTypes.array };

export default YearStats;
