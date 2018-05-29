import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import AnimatedContainer from "../../../../../components/animated-container";

const Container = styled.div`
    height: 250px;
    background: white;
    border-radius: 16px;
    color: black;
    margin: 24px 0;
    box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.15), 0 1px 30px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Title = styled.div`
    font-size: 1.5em;
    line-height: 60px;
    font-weight: bold;
    text-align: center;
`;

const NumberContainer = styled.div`
    text-align: center;
    font-size: calc(45px + 0.8vw);
    font-weight: 500;
`;

const Number = styled.p`
    font-size: calc(40px + 0.8vw);
    font-weight: bold;
`;

const Unit = styled.p`
    font-size: calc(12px + 0.8vw);
    font-weight: lighter;
    margin-top: -12px;
`;

const Comparison = styled.div`
    background-color: lightgray;
    border-radius: 30px;
    height: 50px;
    margin: 16px 24px;
    text-align: center;
    line-height: 35px;
`;

const What = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: red;
`;

const When = styled.p`
    color: whitesmoke;
    margin-top: -19px;
`;

export default class StatCard extends Component {
    static propTypes = {
        title: PropTypes.string,
        number: PropTypes.string,
        unit: PropTypes.string,
        performance: PropTypes.string,
        time: PropTypes.string,
        more: PropTypes.bool,
        delay: PropTypes.number
    };

    static defaultProps = {
        title: "TEAM TOTAL",
        number: 403,
        unit: "Km",
        performance: "↓ 120km less",
        time: "than last month"
    };

    render() {
        const { title, number, unit, performance, time, more, delay } = this.props;

        return (
            <Container>
                <AnimatedContainer delay={delay}>
                    <Title>{title.toUpperCase()}</Title>
                    <NumberContainer>
                        <Number>{number}</Number>
                        <Unit>{unit}</Unit>
                    </NumberContainer>
                    <Comparison>
                        <What more={more}>
                            {`${more ? "↑" : "↓"} ${performance}${unit} ${more ? "more" : "less"}`}
                        </What>
                        <When>{time}</When>
                    </Comparison>
                </AnimatedContainer>
            </Container>
        );
    }
}
