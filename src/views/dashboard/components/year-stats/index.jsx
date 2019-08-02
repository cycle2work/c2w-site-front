import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import moment from "moment";

import AnimatedNumber from "react-animated-number/build/AnimatedNumber";

import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";

import AnimatedContainer from "../../../../components/animated-container";

import * as colors from "../../../../commons/colors";

import { Title, Container, NumberContainer, Number, Unit } from "../cards/stat-card";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
`;

const ChartContainer = styled.div`
    grid-area: 1 / 1 / 2 / 2;
`;

const TooltipContainer = styled.div`
    grid-area: 1 / 2 / 2 / 3;

    display: flex;
    justify-content: center;
    align-items: center;
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

    return (
        <Container>
            <AnimatedContainer>
                <Title>{"YEAR AND KMs BY MONTHS"}</Title>

                <Grid>
                    <ChartContainer>
                        <ResponsiveContainer height={192} width="100%">
                            <AreaChart
                                data={monthlyData}
                                margin={{
                                    top: 16,
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
                    </ChartContainer>
                    <TooltipContainer>
                        {/* <NumberContainer>
                            <Number>
                                <AnimatedNumber value={1} formatValue={n => n.toFixed(1)} />
                            </Number>
                            <Unit>{"Km"}</Unit>
                        </NumberContainer> */}
                    </TooltipContainer>
                </Grid>
            </AnimatedContainer>
        </Container>
    );
};

YearStats.propTypes = { yearData: PropTypes.array };

export default YearStats;
