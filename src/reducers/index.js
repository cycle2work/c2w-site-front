import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import register from './register';
import reports from './reports';

const reducers = combineReducers({
    register,
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
