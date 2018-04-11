import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import Dashboard from "./dashboard";
import RootPage from "./root";
import ThankYouPage from "./thank-you";

import { navigate } from "../actions/location";

import store from "../reducers";

export class Routes extends Component {
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
                <Route component={Dashboard} path="/dashboard" />
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

export const ConnectedRoutes = connect(mapStateToProps, mapDispatchToProps)(withRouter(Routes));

export default class Views extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ConnectedRoutes />
                </BrowserRouter>
            </Provider>
        );
    }
}
