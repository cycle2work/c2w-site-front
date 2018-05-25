import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

import { Col, Row } from "antd";

import styled from "styled-components";

import { fetchData } from "../../actions/dashboard";

import ActivityCard from "./components/cards/activity-card";
import UserCard from "./components/cards/user-card";
import TeamCard from "./components/cards/team-card";
import StatCard from "./components/cards/stat-card";
import SubHeader from "./components/sub-header";

import gradient from "../../assets/images/gradient_mondora.png";

import { lighterGrey } from "../../commons/colors";

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
            activities: []
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
            dashboard: { activities }
        } = this.props;

        const month = moment.utc().format("MM");
        const previousMonth = moment
            .utc()
            .subtract({ months: 1 })
            .format("MM");

        const totalPrevious = activities
            .filter(x => x.month === previousMonth)
            .reduce((total, activity) => (total + activity.distance) / 1000, 0);

        const total = activities
            .filter(x => x.month === month)
            .reduce((total, activity) => (total + activity.distance) / 1000, 0);

        const more = total >= totalPrevious;

        const delta = total - totalPrevious;

        const stats = {
            km: total,
            deltaKm: delta,
            co2: total / 600,
            deltaCo2: delta / 600,
            euro: total * 0.2,
            deltaEuro: delta * 0.2
        };

        const cards = [
            {
                title: "Your total",
                fromColor: "#1E5799",
                toColor: "#207CCA",
                number: stats.km.toFixed(0),
                unit: "Km",
                performance: stats.deltaKm.toFixed(0),
                time: "than last month",
                more
            },
            {
                title: "You saved",
                fromColor: "#FF3E84",
                toColor: "#F9CB00",
                number: stats.co2.toFixed(2),
                unit: "Kg/CO2",
                performance: stats.deltaCo2.toFixed(2),
                time: "than last month",
                more
            },
            {
                title: "You earned",
                fromColor: "#8C1CC9",
                toColor: "#2CD1FF",
                number: stats.euro.toFixed(0),
                unit: "€",
                performance: stats.deltaEuro.toFixed(0),
                time: "than last month",
                more
            }
        ];

        return (
            <Container>
                <MaxWidth>
                    <Row type="flex" justify={"center"} gutter={24}>
                        <Col xs={24}>
                            <SubHeader label="Your mounth data" />
                        </Col>
                        <Col xs={22} sm={12} lg={9}>
                            <UserCard user={user} />
                        </Col>
                        {cards.map((card, index) => (
                            <Col xs={20} sm={10} lg={5} key={index}>
                                <ActivityCard
                                    fromColor={card.fromColor}
                                    toColor={card.toColor}
                                    title={card.title}
                                    number={card.number}
                                    unit={card.unit}
                                    performance={card.performance}
                                    time={card.time}
                                    more={card.more}
                                />
                            </Col>
                        ))}
                    </Row>
                    <Row type="flex" justify={"center"} gutter={24}>
                        <Col xs={24}>
                            <SubHeader label="Team mounth data" />
                        </Col>
                        <Col xs={22} lg={12}>
                            <TeamCard />
                        </Col>
                        <Col xs={18} lg={6}>
                            <StatCard />
                        </Col>
                        <Col xs={18} lg={6}>
                            <StatCard
                                title="Team saved"
                                number={2.3}
                                unit={"Kg/CO2"}
                                performance={"↑ 10€ more"}
                                time={"than last month"}
                            />
                        </Col>
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
