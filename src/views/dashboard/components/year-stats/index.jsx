import React, { useState } from "react";
import PropTypes from "prop-types";

import moment from "moment";

import styled from "styled-components";

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

const YearStats = ({ monthsData = [] }) => {
    const [number, setNumber] = useState();
    const [month, setMonth] = useState();

    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const monthlyData = months.map(month => {
        const data = monthsData.find(data => data.month === month) || { distance: 0 };
        return {
            ...month,
            ...data
        };
    });

    return (
        <Container>
            <AnimatedContainer delay={1050}>
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
                                    content={event => {
                                        if (
                                            event.payload &&
                                            event.payload[0] &&
                                            event.payload[0].payload &&
                                            event.payload[0].payload.month
                                        ) {
                                            setNumber(event.payload[0].payload.distance / 1000);
                                            setMonth(event.payload[0].payload.month);
                                        }
                                    }}
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
                        <NumberContainer>
                            <Unit>
                                {month &&
                                    moment()
                                        .month(month - 1)
                                        .format("MMMM")}
                            </Unit>
                            <Number>
                                <AnimatedNumber value={number} formatValue={n => n.toFixed(1)} />
                            </Number>
                            <Unit>{"Km"}</Unit>
                        </NumberContainer>
                    </TooltipContainer>
                </Grid>
            </AnimatedContainer>
        </Container>
    );
};

YearStats.propTypes = { monthsData: PropTypes.array };

export default YearStats;
