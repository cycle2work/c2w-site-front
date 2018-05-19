import PropTypes from "prop-types";
import React, { Component } from "react";
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

class ThankYouPage extends Component {
    static propTypes = {
        joinNow: PropTypes.func.isRequired,
        location: PropTypes.shape({
            search: PropTypes.string
        }),
        rehydrated: PropTypes.bool.isRequired,
        user: PropTypes.object
    };

    componentWillReceiveProps() {
        const { location: { search }, joinNow } = this.props;
        const parsed = parse(search);
        if (parsed.code) {
            joinNow(parsed.code);
        }
    }

    render() {
        const { rehydrated, user } = this.props;
        return rehydrated ? (
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
                        <a href="/dashboard">
                            <Button label={`${user ? "Dashboard" : "Wait..."}`} />
                        </a>
                    </Col>
                </CenteredRow>
            </Container>
        ) : null;
    }
}

function mapStateToProps(state) {
    return {
        location: state.location,
        rehydrated: state.rehydrated,
        user: state.strava.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        joinNow: bindActionCreators(joinNow, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYouPage);
