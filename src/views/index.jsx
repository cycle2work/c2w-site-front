import React, { Component } from "react";
import { Provider } from "react-redux";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import PropTypes from "prop-types";

import BackToTop from "../components/back-to-top";
import Footer from "../components/footer";

import Dashboard from "./dashboard";
import Homepage from "./homepage";
import ThankYou from "./thank-you";

import store from "../reducers";

export class Routes extends Component {
    static propTypes = {
        location: PropTypes.shape({
            pathname: PropTypes.string,
            search: PropTypes.string
        })
    };

    componentDidMount() {
        this.onNavigate();
    }

    onNavigate = (prevProps = {}) => {
        const { location } = this.props;
        if (location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    };

    render() {
        return (
            <>
                <Route
                    render={props => (
                        <>
                            <Switch>
                                <Route path="/dashboard" component={Dashboard} />
                                <Route
                                    path="/thank-you"
                                    render={() => <ThankYou location={props.location} />}
                                />
                                <Route path="/" component={Homepage} />
                            </Switch>
                            <Footer />
                            <BackToTop />
                        </>
                    )}
                    path="/"
                />
            </>
        );
    }
}

export const ConnectedRoutes = withRouter(Routes);

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
