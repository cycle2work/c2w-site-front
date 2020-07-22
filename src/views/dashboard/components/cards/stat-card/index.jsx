import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import AnimatedNumber from "react-animated-number";
import AnimatedContainer from "../../../../../components/animated-container";

import * as colors from "../../../../../commons/colors";
import { FormattedMessage } from "react-intl";

export const Container = styled.div`
    height: 256px;
    background-color: ${colors.white};
    border-radius: 16px;
    color: ${colors.black};
    margin: 24px 0;
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.15), 0 1px 20px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const Title = styled.div`
    font-size: 1.5em;
    line-height: 64px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
`;

export const NumberContainer = styled.div`
    text-align: center;
    font-size: calc(45px + 0.8vw);
    font-weight: 700;
`;

export const Number = styled.p`
    font-size: calc(40px + 0.8vw);
    font-weight: 700;
    color: ${colors.primaryColor};
`;

export const Unit = styled.p`
    font-size: calc(14px + 0.8vw);
    font-weight: 400;
    margin-top: -12px;
`;

const Comparison = styled.div`
    background-color: ${colors.lighterGrey};
    border-radius: 30px;
    height: 50px;
    margin: 16px 24px;
    text-align: center;
    line-height: 35px;
`;

const What = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => (props.more ? colors.green : colors.red)};
`;

const When = styled.p`
    color: ${colors.grey};
    margin-top: -19px;
`;

export default class StatCard extends Component {
    static propTypes = {
        title: PropTypes.node,
        number: PropTypes.number,
        decimals: PropTypes.number,
        unit: PropTypes.node,
        performance: PropTypes.number,
        time: PropTypes.node,
        more: PropTypes.bool,
        delay: PropTypes.number,
    };

    static defaultProps = {
        title: "TEAM TOTAL",
        number: 403,
        unit: "Km",
        performance: "↓ 120km less",
        time: "than last month",
    };

    render() {
        const { title, number, decimals, unit, performance, time, more, delay } = this.props;
        return (
            <Container>
                <AnimatedContainer delay={delay}>
                    <Title>{title}</Title>
                    <NumberContainer>
                        <Number>
                            <AnimatedNumber
                                value={number}
                                formatValue={(n) => n.toFixed(decimals)}
                            />
                        </Number>
                        <Unit>{unit}</Unit>
                    </NumberContainer>
                    <Comparison>
                        <What more={more}>
                            {more ? "↑" : "↓"} {performance.toFixed(decimals)} {unit}{" "}
                            <FormattedMessage id={`dashboard.stats.${more ? "more" : "less"}`} />
                        </What>
                        <When>{time}</When>
                    </Comparison>
                </AnimatedContainer>
            </Container>
        );
    }
}
