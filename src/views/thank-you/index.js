import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { parse } from "query-string";

import { joinNow } from "../../actions/strava";

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
            <div>{"Thank you!"}</div>
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
