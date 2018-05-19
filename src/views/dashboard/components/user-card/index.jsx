import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Container = styled.div`
    height: 400px;
    background: white;
    border-radius: 16px;
    color: black;
    margin: 24px 0;
    box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.15), 0 1px 30px 0 rgba(0, 0, 0, 0.15);
`;

const Title = styled.div`
    line-height: 35px;
    font-weight: bold;
    text-align: center;
    color: transparent;
`;

const ProfileImage = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 90px;
    margin: 30px auto;
    border: 1px solid rgba(255, 255, 255, 0);
    box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.05);
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    text-align: center;
    line-height: 1;
    font-size: calc(45px + 0.8vw);
    font-weight: 500;
`;

const Comparison = styled.div`
    height: 50px;
    margin: 60px 24px 0 24px;
    text-align: center;
    line-height: 35px;
`;

const Username = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

const Where = styled.p`
    color: grey;
    font-size: 14px;
`;

export default class ActivityCard extends Component {
    static propTypes = {
        user: PropTypes.shape({})
    };

    render() {
        const { user } = this.props;
        return (
            <Container>
                <Title>{"user"}</Title>
                <ProfileImage imageUrl={user.profile} />
                <Comparison>
                    <Username>{`${user.firstname} ${user.lastname}`}</Username>
                    <Where>{`${user.state} - ${user.country}`}</Where>
                </Comparison>
            </Container>
        );
    }
}
