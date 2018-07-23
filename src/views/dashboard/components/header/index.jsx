import React, { Component } from "react";
import PropTypes from "prop-types";

import { Col, Row, Icon } from "antd";

import styled from "styled-components";

import moment from "moment";

import logo from "../../../../assets/images/logo_cycle2work.svg";
import * as colors from "../../../../commons/colors";

const Container = styled.div`
    color: white;
    background: linear-gradient(180deg, ${colors.primaryColor} 50%, transparent 50%);
    font-size: 1.6em;
    font-weight: bolder;
`;

const LogoContainer = styled.div`
    width: 96px;
    height: 96px;
    margin: 16px;
    border-radius: 8px;
    background-color: white;
    padding: 8px;
    box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.3);
`;

const UpperLabel = styled.p`
    margin-top: 24px;
`;

const ExitButton = styled.div`
    padding: 8px;
`;

const Calendar = styled.div`
    font-size: 0.8em;
    line-height: 32px;
    color: black;
    margin: 24px 16px 0 0;
    padding: 0 16px;
    background-color: white;
    border-radius: 16px;
`;

export default class Header extends Component {
    static propTypes = {
        company: PropTypes.string,
        user: PropTypes.shape({
            firstname: PropTypes.string.isRequired,
            lastname: PropTypes.string.isRequired
        })
    };

    static defaultProps = {
        user: {
            firstname: "Firstname",
            lastname: "Lastname"
        },
        company: "Cycle2Work.io - Mondora Srl Sb"
    };

    render() {
        const { user, company } = this.props;
        return (
            <Container>
                <Row>
                    <Col md={12} xs={24}>
                        <Row type="flex">
                            <LogoContainer>
                                <img src={logo} alt="Cycle2work.io" />
                            </LogoContainer>
                            <UpperLabel>{company}</UpperLabel>
                        </Row>
                    </Col>
                    <Col md={12} xs={24}>
                        <Row type="flex" justify="end">
                            <UpperLabel>{`Hello, ${user.firstname} ${user.lastname}!`}</UpperLabel>
                            <ExitButton />
                        </Row>
                        <Row type="flex" justify="end">
                            <Calendar>
                                <Icon type="calendar" />
                                {` ${moment().format("MMMM D, YYYY")}`}
                            </Calendar>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
