import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import RootPage from "./root";
import ThankYouPage from "./thank-you";

import { navigate } from "../actions/location";

import store from "../reducers";

class Views extends Component {

    static propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string,
            search: PropTypes.string
        }),
        navigate: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.onNavigate();
    }

    componentDidUpdate(prevProps) {
        this.onNavigate(prevProps);
    }

    onNavigate(prevProps = {}) {
        const { location, navigate } = this.props;
        if (location !== prevProps.location) {
            window.scrollTo(0, 0);
            navigate(location);
        }
    }

    render() {
        return (
            <Switch>
                <Route component={ThankYouPage} path="/thank-you" />
                <Route component={RootPage} path="/" />
            </Switch>
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
        navigate: bindActionCreators(navigate, dispatch)
    };
}

const ConnectedViews = connect(mapStateToProps, mapDispatchToProps)(withRouter(Views));

export default (
    <Provider store={store}>
        <BrowserRouter> 
            <ConnectedViews />
        </BrowserRouter>
    </Provider>
);
