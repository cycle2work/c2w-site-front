import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { parse } from "query-string";

import { Row, Col } from "antd";
import styled from "styled-components";

import Button from "../../components/button";
import { joinNow } from "../../actions/strava";

import gradient from "../../assets/images/gradient_mondora.png";
import { grey, white, primaryColor } from "../../commons/colors";

const Container = styled.div`
    height: 100%;
    color: ${grey};
    background-image: url(${gradient});
    background-size: contain;
    background-repeat: "repeat-y";
`;

const ContentWrp = styled.div`
    background-color: ${white};
    height: 60%;
    width: 80%;
    min-height: 500px;
    border-radius: 20px;
    -webkit-box-shadow: 0px 8px 60px -9px rgba(28, 27, 41, 0.3);
    -moz-box-shadow: 0px 8px 60px -9px rgba(28, 27, 41, 0.3);
    box-shadow: 0px 8px 60px -9px rgba(28, 27, 41, 0.3);
    margin: 10% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 20px 50px;
    @media screen and (max-width: 991px) {
        width: 100%;
        height: auto;
        margin: 50px auto;
    }
`;

const Title = styled.h1`
    font-size: calc(40px + 0.25vw);
    line-height: calc(40px + 0.25vw);
`;

const Strong = styled.strong`
    color: ${primaryColor};
`;

const Fa = styled.i`
    font-size: calc(55px + 0.25vw);
    color: ${primaryColor};
`;

const CenteredRow = styled(Row)`
    text-align: center;
`;

const Text = styled.p`
    font-size: 16px;
`;

const Disabled = styled.div`
    opacity: 0.5;
    cursor: auto;
`;

class ThankYouPage extends Component {
    static propTypes = {
        joinNow: PropTypes.func.isRequired,
        location: PropTypes.shape({
            search: PropTypes.string
        }),
        user: PropTypes.object
    };

    componentDidMount() {
        const {
            location: { search },
            joinNow
        } = this.props;
        const parsed = parse(search);
        if (parsed.code) {
            joinNow(parsed.code);
        }
    }

    render() {
        const { user } = this.props;
        return (
            <Container>
                <CenteredRow type="flex" align="middle" justify="center">
                    <Col xs={20}>
                        <ContentWrp>
                            <Fa className="fas fa-check-circle" />
                            <Title>
                                {"THANK "}
                                <Strong>{"YOU!"}</Strong>
                            </Title>
                            <br />
                            <Text>
                                {"You can now commute and start saving CO2."}
                                <br />
                                {"Thanks for making the world better!"}
                            </Text>
                            <br />
                            {user ? (
                                <Link to="/dashboard">
                                    <Button label="Explore your DASHBOARD" />
                                </Link>
                            ) : (
                                <Disabled>
                                    <Button label="Loading..." disabled={true} />
                                </Disabled>
                            )}
                        </ContentWrp>
                    </Col>
                </CenteredRow>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.strava.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        joinNow: bindActionCreators(joinNow, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYouPage);
