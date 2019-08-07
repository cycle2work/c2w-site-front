import React, { useState } from "react";
import PropTypes from "prop-types";

import moment from "moment";

import styled from "styled-components";

import AnimatedNumber from "react-animated-number/build/AnimatedNumber";

import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";

import AnimatedContainer from "../../../../components/animated-container";

import * as colors from "../../../../commons/colors";

import { Title, Container, NumberContainer, Number, Unit } from "../cards/stat-card";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 1fr;
`;

const ChartContainer = styled.div`
    grid-area: 1 / 1 / 2 / 2;
`;

const TooltipContainer = styled.div`
    grid-area: 1 / 2 / 2 / 3;

    display: flex;
    justify-content: center;
`;

const Month = styled.p`
    margin-top: 24px;
    font-size: 16px;
    text-transform: uppercase;
`;

const YearStats = ({ monthsData = [] }) => {
    const [number, setNumber] = useState();
    const [month, setMonth] = useState();
    const [activeIndex, setActiveIndex] = useState();

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
                <Title>{"YEAR BY MONTH"}</Title>

                <Grid>
                    <ChartContainer>
                        <ResponsiveContainer height={192} width="100%">
                            <BarChart
                                data={monthlyData}
                                margin={{
                                    top: 16,
                                    bottom: 16,
                                    left: 16
                                }}
                            >
                                <Bar
                                    type="monotone"
                                    dataKey="distance"
                                    stroke={colors.lighterGrey}
                                    strokeWidth={4}
                                    strokeLinejoin="round"
                                    fill={colors.lighterGrey}
                                >
                                    {monthlyData.map((entry, index) => {
                                        const color =
                                            activeIndex === index
                                                ? colors.primaryColor
                                                : colors.lighterGrey;

                                        return (
                                            <Cell
                                                cursor="pointer"
                                                key={`cell-${index}`}
                                                stroke={color}
                                                fill={color}
                                                onClick={() => {
                                                    setNumber(entry.distance / 1000);
                                                    setMonth(entry.month);
                                                    setActiveIndex(index);
                                                }}
                                            />
                                        );
                                    })}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                    <TooltipContainer>
                        <NumberContainer>
                            <Number>
                                <AnimatedNumber value={number} formatValue={n => n.toFixed(1)} />
                            </Number>
                            <Unit>{"Km"}</Unit>
                            <Month>
                                {month &&
                                    moment()
                                        .month(month - 1)
                                        .format("MMMM")}
                            </Month>
                        </NumberContainer>
                    </TooltipContainer>
                </Grid>
            </AnimatedContainer>
        </Container>
    );
};

YearStats.propTypes = { monthsData: PropTypes.array };

export default YearStats;
