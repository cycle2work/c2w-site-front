import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import AnimatedNumber from "react-animated-number";
import AnimatedContainer from "../../../../../components/animated-container";
import * as colors from "../../../../../commons/colors";
import { FormattedMessage } from "react-intl";

const Container = styled.div`
    height: 400px;
    background: linear-gradient(
        135deg,
        ${props => props.fromColor} 20%,
        ${props => props.toColor} 80%
    );
    border-radius: 16px;
    color: white;
    margin: 24px 0;
    box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const FixedHeight = styled.div`
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Title = styled.div`
    font-size: 1.5em;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
`;

const NumberContainer = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 90px;
    margin: 36px auto;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0);
    box-shadow: 0px 0px 0px 15px rgba(255, 255, 255, 0.1);
    text-align: center;
    line-height: 1;
    font-size: calc(45px + 0.8vw);
    font-weight: 700;
`;

const Number = styled.p`
    margin-top: 48px;
    font-size: calc(40px + 0.8vw);
    font-weight: 700;
`;

const Unit = styled.p`
    font-size: calc(14px + 0.8vw);
    font-weight: 400;
`;

const Comparison = styled.div`
    background-color: white;
    border-radius: 30px;
    height: 50px;
    margin: 16px 24px;
    text-align: center;
    line-height: 35px;
`;

const What = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: ${props => (props.more ? colors.green : colors.red)};
`;

const When = styled.p`
    color: grey;
    margin-top: -16px;
`;

export default class ActivityCard extends Component {
    static propTypes = {
        fromColor: PropTypes.string,
        toColor: PropTypes.string,
        title: PropTypes.node,
        number: PropTypes.number,
        decimals: PropTypes.number,
        unit: PropTypes.node,
        performance: PropTypes.number,
        time: PropTypes.node,
        more: PropTypes.bool,
        delay: PropTypes.number
    };

    static defaultProps = {
        number: 0
    };

    render() {
        const {
            fromColor,
            toColor,
            title,
            number,
            decimals,
            unit,
            performance,
            time,
            more,
            delay
        } = this.props;

        return (
            <Container fromColor={fromColor} toColor={toColor}>
                <AnimatedContainer delay={delay}>
                    <FixedHeight>
                        <Title>{title}</Title>
                    </FixedHeight>
                    <NumberContainer>
                        <Number>
                            <AnimatedNumber value={number} formatValue={n => n.toFixed(decimals)} />
                        </Number>
                        <Unit>{unit}</Unit>
                    </NumberContainer>
                    <FixedHeight>
                        <Comparison>
                            <What more={more}>
                                {more ? "↑" : "↓"} {performance.toFixed(decimals)} {unit}{" "}
                                <FormattedMessage
                                    id={`dashboard.stats.${more ? "more" : "less"}`}
                                />
                            </What>
                            <When>{time}</When>
                        </Comparison>
                    </FixedHeight>
                </AnimatedContainer>
            </Container>
        );
    }
}
