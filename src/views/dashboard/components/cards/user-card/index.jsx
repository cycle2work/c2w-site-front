import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import * as colors from "../../../../../commons/colors";

const Container = styled.div`
    height: 400px;
    background-color: ${colors.white};
    border-radius: 16px;
    color: black;
    margin: 24px 0;
    padding: 45px 0;
    box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.15), 0 1px 30px 0 rgba(0, 0, 0, 0.15);
    @media screen and (max-width: 767px) {
        height: auto;
    }
`;

const ProfileImage = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 90px;
    margin: 0px auto;
    padding: 60px 0;
    border: 15px solid ${colors.lighterGrey};
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    text-align: center;
    line-height: 1;
    font-size: calc(45px + 0.8vw);
    font-weight: 400;
`;

const Comparison = styled.div`
    height: 50px;
    margin: 60px 24px 0 24px;
    text-align: center;
    line-height: 35px;
    @media screen and (max-width: 767px) {
        height: auto;
        margin: 10px;
    }
`;

const Username = styled.p`
    font-size: calc(16px + 0.2vw);
    font-weight: 400;
    margin: 0;
`;

const Where = styled.span`
    color: ${colors.grey};
    font-size: calc(14px + 0.2vw);
`;

export default class ActivityCard extends Component {
    static propTypes = {
        user: PropTypes.shape({
            firstname: PropTypes.string.isRequired,
            lastname: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            profile: PropTypes.string.isRequired
        })
    };

    render() {
        const { user } = this.props;
        const state = user.state || "";
        const country = user.country || "";
        return (
            <Container>
                <ProfileImage imageUrl={user.profile} />
                <Comparison>
                    <Username>{`${user.firstname} ${user.lastname}`}</Username>
                    <Where>{`${state} ${country}`}</Where>
                </Comparison>
            </Container>
        );
    }
}
