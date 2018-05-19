import { applyMiddleware, createStore, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, autoRehydrate } from "redux-persist";

import location from "./location";
import strava from "./strava";
import reports from "./reports";
import rehydrated from "./rehydrated";

const reducers = combineReducers({
    location,
    strava,
    reports,
    rehydrated
});

const logger = createLogger({
    collapsed: true
});

const store = createStore(reducers, applyMiddleware(thunk, logger), autoRehydrate());

persistStore(store);

export default store;
