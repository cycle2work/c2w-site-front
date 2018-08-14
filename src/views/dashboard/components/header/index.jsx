import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Col, Row } from "antd";
import styled from "styled-components";

import logo from "../../../../assets/images/logo_cycle2work.svg";
import * as colors from "../../../../commons/colors";

const Container = styled.div`
    color: white;
    background-color: ${colors.primaryColor};
    @media screen and (max-width: 767px) {
        height: auto;
    }
`;

const LogoContainer = styled.div`
    position: absolute;
    width: 96px;
    height: 96px;
    margin: 16px;
    border-radius: 8px;
    background-color: white;
    padding: 8px;
    box-shadow: 0 1px 30px 0 rgba(0, 0, 0, 0.3);
    z-index: 1;
    @media screen and (max-width: 767px) {
        left: calc(50% - 33px);
        margin: 0;
        top: 50px;
        width: 66px;
        height: 66px;
    }
`;

const UpperLabelLeft = styled.p`
    line-height: 60px;
    margin: 0 0 0 120px;
    font-size: calc(14px + 0.2vw);
    font-weight: 400;
    padding: 0 20px;
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 20px;
    @media screen and (max-width: 767px) {
        border-bottom: 1px solid ${colors.white};
        justify-content: space-between;
    }
`;

const UpperLabelRight = styled.span`
    text-align: right;
    line-height: 60px;
    font-size: calc(12px + 0.2vw);
    font-weight: 300;
`;

// const ExitButton = styled.i`
//     font-size: 16px;
//     line-height: 60px;
//     margin-left: 10px;
//     cursor: pointer;
// `;

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
                <Link to="/">
                    <LogoContainer>
                        <img src={logo} alt="Cycle2work.io" />
                    </LogoContainer>
                </Link>
                <Row type="flex">
                    <Col xs={{ span: 24, order: 2 }} sm={{ span: 12, order: 1 }}>
                        <UpperLabelLeft>{company}</UpperLabelLeft>
                    </Col>
                    <Col xs={{ span: 24, order: 1 }} sm={{ span: 12, order: 2 }}>
                        <UserInfo>
                            <UpperLabelRight>
                                {"Hello, "}
                                <strong>{`${user.firstname} ${user.lastname}!`}</strong>
                            </UpperLabelRight>
                            {/* <ExitButton className="fas fa-sign-out-alt" /> */}
                        </UserInfo>
                    </Col>
                </Row>
            </Container>
        );
    }
}
