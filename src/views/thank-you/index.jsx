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
import { grey } from "../../commons/colors";

const Container = styled.div`
    height: 100vh;
    color: ${grey};
    background-image: url(${gradient});
    background-size: contain;
    background-repeat: "repeat-y";
`;

const CenteredRow = styled(Row)`
    height: 80%;
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
                        <h1>{"Thank you!"}</h1>
                        <br />
                        <Text>
                            {"You can now commute and start saving CO2."}
                            <br />
                            {"Thanks for making the world better!"}
                        </Text>
                        <br />
                        {user ? (
                            <Link to="/dashboard">
                                <Button label="Dashboard" />
                            </Link>
                        ) : (
                            <Disabled>
                                <Button label="Loading..." disabled={true} />
                            </Disabled>
                        )}
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
