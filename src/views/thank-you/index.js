import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
    Row,
    Col
} from "antd";

import { parse } from "query-string";

import { joinNow } from "../../actions/strava";

import Button from "../../components/button";

import { styles } from "./styles";

class ThankYouPage extends Component {

    static propTypes = {
        joinNow: PropTypes.func.isRequired,
        location: PropTypes.shape({
            search: PropTypes.string
        })
    };

    componentDidUpdate() {
        const { location: { search }, joinNow } = this.props;
        const parsed = parse(search);
        if (parsed.code) {
            joinNow(parsed.code);
        }
    }

    render() {
        return (
            <div style={styles.container}>
                <Row type="flex" align="middle" justify="center" style={styles.row}>
                    <Col span={8}>
                        <h1>{"Thank you!"}</h1>
                        <br />
                        <p style={styles.text}>
                            {"You can now commute and start saving CO2."}
                            <br />
                            {"Thanks for making the world better!"}
                        </p>
                        <br />
                        <Button label="Dashboard" />
                        <p>{"Coming soon"}</p>
                    </Col>
                </Row>


            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        location: state.location
    };
}

function mapDispatchToProps(dispatch) {
    return {
        joinNow: bindActionCreators(joinNow, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYouPage);
