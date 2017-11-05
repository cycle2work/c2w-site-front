import { applyMiddleware, createStore, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import strava from "./strava";
import reports from "./reports";

const reducers = combineReducers({
    strava,
    reports
});

const logger = createLogger({
    collapsed: true
});

const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);

export default store;
