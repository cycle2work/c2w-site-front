import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import * as colors from "../../../commons/colors";

const Container = styled.div`
    @media screen and (max-width: 991px) {
        padding: 20px;
        border-radius: 8px;
        margin: 20px auto;
        background-color: ${colors.white};
    }
`;

const PositionLabel = styled.div`
    font-size: calc(28px + 0.2vw);
    font-weight: 700;
    padding-left: 10px;
    color: ${colors.black};
    @media screen and (max-width: 991px) {
        color: ${colors.primaryColor};
    }
`;

const Image = styled.img`
    height: 100px;
    border-radius: 8px;
    box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.15), 0 1px 30px 0 rgba(0, 0, 0, 0.15);
    @media screen and (max-width: 991px) {
        height: 50px;
    }
`;

const Company = styled.div`
    font-size: calc(16px + 0.2vw);
    font-weight: 700;
    color: ${colors.black};
`;

const Step = styled.div`
    margin-top: 10px;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    @media screen and (max-width: 991px) {
        background-color: transparent;
    }
`;

const MeasureContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
`;

const Co2Number = styled.div`
    font-size: calc(16px + 0.2vw);
    font-weight: 700;
`;

const KmNumber = styled.div`
    font-size: calc(16px + 0.2vw);
    font-weight: 700;
`;

const Unit = styled.div`
    display: inline;
    margin: 0 4px;
`;

export default class Position extends Component {
    static propTypes = {
        company: PropTypes.shape({
            distance: PropTypes.number,
            name: PropTypes.string,
            profile: PropTypes.profile
        }),
        position: PropTypes.string
    };

    render() {
        const {
            company: { name, distance, profile },
            position
        } = this.props;
        return (
            <Container>
                <PositionLabel>{position}</PositionLabel>
                <Image alt={name} src={profile} />
                <Company>{name}</Company>
                <Step>
                    <MeasureContainer>
                        <Co2Number>{`${((distance || 0) / 600000).toFixed(2)}`}</Co2Number>
                        <Unit>{"Kg/Co2"}</Unit>
                    </MeasureContainer>
                    <MeasureContainer>
                        <KmNumber>{`${Math.round((distance || 0) / 1000)}`}</KmNumber>
                        <Unit>{"Km"}</Unit>
                    </MeasureContainer>
                </Step>
            </Container>
        );
    }
}
