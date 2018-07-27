import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const PositionLabel = styled.div`
    font-size: 2em;
`;

const Image = styled.img`
    height: 100px;
    border-radius: 8px;
    box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.15), 0 1px 30px 0 rgba(0, 0, 0, 0.15);
`;

const Company = styled.div`
    font-size: 1.4em;
    font-weight: bold;
`;

const MeasureContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
`;

const Co2Number = styled.div`
    font-size: 1.4em;
    font-weight: bolder;
`;

const KmNumber = styled.div`
    font-size: 1.2em;
    font-weight: bolder;
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
            <div>
                <PositionLabel>{position}</PositionLabel>
                <Image alt={name} src={profile} />
                <Company>{name}</Company>
                <MeasureContainer>
                    <Co2Number>{`${((distance || 0) / 600000).toFixed(2)}`}</Co2Number>
                    <Unit>{"Kg/Co2"}</Unit>
                </MeasureContainer>
                <MeasureContainer>
                    <KmNumber>{`${Math.round((distance || 0) / 1000)}`}</KmNumber>
                    <Unit>{"Km"}</Unit>
                </MeasureContainer>
            </div>
        );
    }
}
