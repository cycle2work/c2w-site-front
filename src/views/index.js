import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import RootPage from "./root";
import ThankYouPage from "./thank-you";

import store from "../reducers";

export default class Views extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route component={ThankYouPage} path="/thank-you" />
                        <Route component={RootPage} path="/" />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}