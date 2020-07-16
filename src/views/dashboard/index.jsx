import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import { Col, Row, Icon } from "antd";

import styled from "styled-components";

import { fetchDashboardData } from "../../actions/dashboard";

import moment from "moment";

import Header from "./components/header";
import ActivityCard from "./components/cards/activity-card";
import UserCard from "./components/cards/user-card";
import TeamCard from "./components/cards/team-card";
import StatCard from "./components/cards/stat-card";
import SubHeader from "./components/sub-header";
import YearStats from "./components/year-stats";

import { lighterGrey, white, primaryColor } from "../../commons/colors";
import { getMonthlyStats, getYearlyStats } from "../../libs/stats";

const Container = styled.div`
    min-height: 100vh;
    background-color: ${lighterGrey};
    background-size: contain;
    background-repeat: "repeat-y";
`;

const MaxWidth = styled.div`
    max-width: 1400px;
    margin: auto;
    padding: 32px 16px;
`;

const Calendar = styled.div`
    float: right;
    font-size: calc(14px + 0.2vw);
    line-height: 32px;
    color: black;
    margin: 10px 16px 0 0;
    padding: 0 16px;
    background-color: ${white};
    border-radius: 16px;
    @media screen and (max-width: 767px) {
        margin: 0;
        color: ${white};
        border-radius: 0;
        width: 100%;
        text-align: right;
        background-color: ${primaryColor};
    }
`;

const DesktopOnly = styled.div`
    display: block;
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const MobileOnly = styled.div`
    font-size: calc(10px + 0.2vw);
    display: none;
    @media screen and (max-width: 767px) {
        display: block;
    }
`;

class Dashboard extends Component {
    static propTypes = {
        user: PropTypes.object,
        fetchDashboardData: PropTypes.func.isRequired,
        dashboardData: PropTypes.array
    };

    static defaultProps = {
        dashboardData: [],
        user: {
            id: 0,
            profile: "",
            firstname: "Firstname",
            lastname: "Lastname",
            country: "Country",
            state: "State"
        }
    };

    componentDidMount() {
        const { fetchDashboardData } = this.props;
        fetchDashboardData();
    }

    render() {
        const { user, dashboardData } = this.props;

        const currentYear = parseInt(moment.utc().format("YYYY"), 10);

        const clubActivities = dashboardData.filter(
            activity => activity.clubId === 148440 && activity.year === currentYear
        );
        const userActivities = dashboardData.filter(
            activity => activity.athleteId === user.id && activity.clubId === 148440
        );
        const userActivitiesCurrentYear = userActivities.filter(
            activity => activity.year === currentYear
        );


        const clubStats = getMonthlyStats(clubActivities);
        const userStats = getMonthlyStats(userActivitiesCurrentYear);
        const userYearlyStats = getYearlyStats(userActivities);

        const userCards = [
            {
                title: <FormattedMessage id="dashboard.stats.card.km.total" />,
                fromColor: "#fe00ac",
                toColor: "#6567e5",
                number: userStats.km,
                decimals: 1,
                unit: <FormattedMessage id="dashboard.unit.km" />,
                performance: userStats.deltaKm,
                time: <FormattedMessage id="dashboard.stats.comparison.monthly" />,
                delay: 150,
                more: userStats.more
            },
            {
                title: <FormattedMessage id="dashboard.stats.card.co2.saved" />,
                fromColor: "#FF3E84",
                toColor: "#F9CB00",
                number: userStats.co2,
                decimals: 2,
                unit: <FormattedMessage id="dashboard.unit.co2.kg" />,
                performance: userStats.deltaCo2,
                time: <FormattedMessage id="dashboard.stats.comparison.monthly" />,
                delay: 300,
                more: userStats.more
            },
            {
                title: <FormattedMessage id="dashboard.stats.card.money.earned" />,
                fromColor: "#8C1CC9",
                toColor: "#2CD1FF",
                number: userStats.euro,
                decimals: 0,
                unit: <FormattedMessage id="dashboard.unit.euro" />,
                performance: userStats.deltaEuro,
                time: <FormattedMessage id="dashboard.stats.comparison.monthly" />,
                delay: 450,
                more: userStats.more
            }
        ];

        const clubCards = [
            {
                title: <FormattedMessage id="dashboard.stats.card.team.total" />,
                number: clubStats.km,
                decimals: 0,
                unit: <FormattedMessage id="dashboard.unit.km" />,
                performance: clubStats.deltaKm,
                time: <FormattedMessage id="dashboard.stats.comparison.monthly" />,
                more: clubStats.more,
                delay: 600
            },
            {
                title: <FormattedMessage id="dashboard.stats.card.team.saved" />,
                number: clubStats.co2,
                decimals: 2,
                unit: <FormattedMessage id="dashboard.unit.co2.kg" />,
                performance: clubStats.deltaCo2,
                time: <FormattedMessage id="dashboard.stats.comparison.monthly" />,
                more: clubStats.more,
                delay: 750
            }
        ];

        return (
            <Container>
                <Header user={user} />
                <Row>
                    <Calendar>
                        <DesktopOnly>
                            <Icon type="calendar" />
                            {` ${moment().format("MMMM D, YYYY")}`}
                        </DesktopOnly>
                        <MobileOnly>{` ${moment().format("DD/MM/YYYY")}`}</MobileOnly>
                    </Calendar>
                </Row>

                <MaxWidth>
                    <Row type="flex" justify={"center"} gutter={24}>
                        <Col xs={24}>
                            <SubHeader
                                label={<FormattedMessage id="dashboard.subheader.monthly.label" />}
                            />
                        </Col>
                        <Col xs={24} sm={18} lg={9}>
                            <UserCard user={user} />
                        </Col>
                        {userCards.map((card, index) => (
                            <Col xs={20} sm={8} lg={5} key={index}>
                                <ActivityCard {...card} />
                            </Col>
                        ))}
                    </Row>
                </MaxWidth>

                <MaxWidth>
                    <Row type="flex" justify={"center"} gutter={24}>
                        <Col xs={24}>
                            <SubHeader
                                label={<FormattedMessage id="dashboard.subheader.yearly.label" />}
                            />
                        </Col>

                        <Col xs={20} sm={8} lg={6}>
                            <StatCard
                                title={<FormattedMessage id="dashboard.stats.km.total" />}
                                number={userYearlyStats.km}
                                decimals={0}
                                unit={<FormattedMessage id="dashboard.unit.km" />}
                                performance={userYearlyStats.deltaKm}
                                time={<FormattedMessage id="dashboard.stats.comparison.yearly" />}
                                more={userYearlyStats.more}
                                delay={750}
                            />
                        </Col>

                        <Col xs={20} sm={8} lg={6}>
                            <StatCard
                                title={<FormattedMessage id="dashboard.stats.co2.total" />}
                                number={userYearlyStats.co2}
                                decimals={2}
                                unit={<FormattedMessage id="dashboard.unit.co2.kg" />}
                                performance={userYearlyStats.deltaCo2}
                                time={<FormattedMessage id="dashboard.stats.comparison.yearly" />}
                                more={userYearlyStats.more}
                                delay={900}
                            />
                        </Col>

                        <Col xs={20} sm={16} lg={12}>
                            <YearStats activities={userActivitiesCurrentYear} />
                        </Col>
                    </Row>
                </MaxWidth>

                <MaxWidth>
                    <Row type="flex" justify={"center"} gutter={24}>
                        <Col xs={24}>
                            <SubHeader
                                label={<FormattedMessage id="dashboard.stats.team.monthly.label" />}
                            />
                        </Col>
                        <Col xs={24} sm={18} lg={12}>
                            <TeamCard />
                        </Col>
                        {clubCards.map((card, index) => (
                            <Col xs={20} sm={12} lg={6} key={index}>
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
        dashboardData: state.dashboard.data
    }),
    { fetchDashboardData }
)(Dashboard);
