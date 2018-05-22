import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Container = styled.div`
    height: 250px;
    background: white;
    border-radius: 16px;
    color: black;
    margin: 24px 0;
    box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.15), 0 1px 30px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const TeamImage = styled.div`
    width: 180px;
    height: 180px;
    margin: 0 35px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0);
    box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.05);
    background-image: url("https://dgalywyr863hv.cloudfront.net/pictures/clubs/148440/4989684/2/large.jpg");
    background-size: cover;
`;

const TeamInfo = styled.div`
    margin: 0 35px;
    line-height: 45px;
`;

const Name = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

const Where = styled.p`
    color: grey;
    font-size: 14px;
`;

const Members = styled.p`
    color: black;
    font-size: 14px;
`;

export default class TeamCard extends Component {
    static propTypes = {
        team: PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            members: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired
        })
    };

    static defaultProps = {
        team: {
            name: "Mondora srl sb",
            image: "default",
            members: "7",
            state: "Berbenno di Valtellina",
            country: "- SO"
        }
    };

    render() {
        const { team } = this.props;
        return (
            <Container>
                <TeamImage imageUrl={team.profile} />
                <TeamInfo>
                    <Name>{team.name}</Name>
                    <Where>{`${team.state} ${team.country}`}</Where>
                    <Members>{"7 - Active members"}</Members>
                </TeamInfo>
            </Container>
        );
    }
}
