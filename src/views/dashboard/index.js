import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Col, Row } from "antd";

import styled from "styled-components";

import ActivityCard from "./components/activity-card";
import UserCard from "./components/user-card";
import SubHeader from "./components/sub-header";

import gradient from "../../assets/images/gradient_mondora.png";

import { lighterGrey } from "../../commons/colors";

const Container = styled.div`
    height: 100vh;
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
        user: PropTypes.object
    };

    static defaultProps = {
        user: {
            profile: "",
            firstname: "Firstname",
            lastname: "Lastname",
            country: "Country",
            state: "State"
        }
    };

    render() {
        const { user } = this.props;
        return (
            <Container>
                <MaxWidth>
                    <Row type="flex" justify="center" gutter={24}>
                        <Col xs={24}>
                            <SubHeader label="Your mounth data" />
                        </Col>
                        <Col xs={22} sm={12} lg={9}>
                            <UserCard user={user} />
                        </Col>
                        <Col xs={20} sm={10} lg={5}>
                            <ActivityCard
                                fromColor={"#1e5799"}
                                toColor={"#207cca"}
                                title="Your total"
                                number={19}
                                unit={"Km"}
                                performance={"↓ 30km less"}
                                time={"than last month"}
                            />
                        </Col>
                        <Col xs={20} sm={10} lg={5}>
                            <ActivityCard
                                fromColor={"#FF3E84"}
                                toColor={"#F9CB00"}
                                title="You saved"
                                number={0.03}
                                unit={"Kg/CO2"}
                                performance={"↓ 0.45Kg/CO2 less"}
                                time={"than last month"}
                            />
                        </Col>
                        <Col xs={20} sm={10} lg={5}>
                            <ActivityCard
                                fromColor={"#8C1CC9"}
                                toColor={"#2CD1FF"}
                                title="You earned"
                                number={22}
                                unit={"€"}
                                performance={"↑ 10€ more"}
                                time={"than last month"}
                            />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center" gutter={24}>
                        <Col xs={24}>
                            <SubHeader label="Your mounth data" />
                        </Col>
                    </Row>
                </MaxWidth>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.strava.user
    };
}

export default connect(mapStateToProps, () => ({}))(Dashboard);
