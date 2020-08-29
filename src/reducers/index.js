import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";

import strava from "./strava";
import dashboard from "./dashboard";
import reports from "./reports";

const reducers = combineReducers({
    strava,
    dashboard,
    reports,
});

const logger = createLogger({
    collapsed: true,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    load(),
    composeEnhancers(applyMiddleware(thunk, logger, save()))
);

export default store;
