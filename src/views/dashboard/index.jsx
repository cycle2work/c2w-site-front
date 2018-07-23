import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Col, Row } from "antd";

import styled from "styled-components";

import { fetchData } from "../../actions/dashboard";

import Header from "./components/header";
import ActivityCard from "./components/cards/activity-card";
import UserCard from "./components/cards/user-card";
import TeamCard from "./components/cards/team-card";
import StatCard from "./components/cards/stat-card";
import SubHeader from "./components/sub-header";

import gradient from "../../assets/images/gradient_mondora.png";

import { lighterGrey } from "../../commons/colors";
import { getStats } from "../../libs/stats";

const Container = styled.div`
    min-height: 100vh;
    background-color: ${lighterGrey};
    background-image: url(${gradient});
    background-size: contain;
    background-repeat: "repeat-y";
`;

const MaxWidth = styled.div`
    max-width: 1400px;
    margin: auto;
    padding: 0 16px;
`;

class Dashboard extends Component {
    static propTypes = {
        user: PropTypes.object,
        fetchData: PropTypes.func.isRequired,
        dashboard: PropTypes.shape({
            activities: PropTypes.array.isRequired
        })
    };

    static defaultProps = {
        dashboard: {
            activities: [],
            club: {
                activities: []
            }
        },
        user: {
            profile: "",
            firstname: "Firstname",
            lastname: "Lastname",
            country: "Country",
            state: "State"
        }
    };

    componentDidMount() {
        const { user, fetchData } = this.props;
        fetchData(user.id);
    }

    render() {
        const {
            user,
            dashboard: { activities, club }
        } = this.props;

        const userStats = getStats(activities);
        const clubStats = getStats(club ? club.activities : []);

        const userCards = [
            {
                title: "Your total",
                fromColor: "#1E5799",
                toColor: "#207CCA",
                number: userStats.km,
                decimals: 0,
                unit: "Km",
                performance: userStats.deltaKm,
                time: "than last month",
                delay: 150,
                more: userStats.more
            },
            {
                title: "You saved",
                fromColor: "#FF3E84",
                toColor: "#F9CB00",
                number: userStats.co2,
                decimals: 2,
                unit: "Kg/CO2",
                performance: userStats.deltaCo2,
                time: "than last month",
                delay: 300,
                more: userStats.more
            },
            {
                title: "You earned",
                fromColor: "#8C1CC9",
                toColor: "#2CD1FF",
                number: userStats.euro,
                decimals: 0,
                unit: "€",
                performance: userStats.deltaEuro,
                time: "than last month",
                delay: 450,
                more: userStats.more
            }
        ];

        const clubCards = [
            {
                title: "Team total",
                number: clubStats.km,
                decimals: 0,
                unit: "Km",
                performance: clubStats.deltaKm,
                time: "than last month",
                more: clubStats.more,
                delay: 600
            },
            {
                title: "Team saved",
                number: clubStats.co2,
                decimals: 2,
                unit: "Kg/CO2",
                performance: clubStats.deltaCo2,
                time: "than last month",
                more: clubStats.more,
                delay: 750
            }
        ];

        return (
            <Container>
                <Header user={user} />
                <MaxWidth>
                    <Row type="flex" justify={"center"} gutter={24}>
                        <Col xs={24}>
                            <SubHeader label="Your month data" />
                        </Col>
                        <Col xs={22} sm={12} lg={9}>
                            <UserCard user={user} />
                        </Col>
                        {userCards.map((card, index) => (
                            <Col xs={20} sm={10} lg={5} key={index}>
                                <ActivityCard {...card} />
                            </Col>
                        ))}
                    </Row>
                    <Row type="flex" justify={"center"} gutter={24}>
                        <Col xs={24}>
                            <SubHeader label="Team month data" />
                        </Col>
                        <Col xs={22} lg={12}>
                            <TeamCard />
                        </Col>
                        {clubCards.map((card, index) => (
                            <Col xs={18} lg={6} key={index}>
                                <StatCard {...card} />
                            </Col>
                        ))}
                    </Row>
                </MaxWidth>
            </Container>
        );
    }
}

export default connect(
    state => ({
        user: state.strava.user,
        dashboard: state.dashboard
    }),
    { fetchData }
)(Dashboard);
