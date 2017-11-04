import {
    FETCH_REPORTS_START,
    FETCH_REPORTS_SUCCESS,
    FETCH_REPORTS_ERROR
} from "../actions/reports";

const defaultState = {
    started: false,
    success: false,
    error: false,
    data: []
};

export default function reports(state = defaultState, { type, payload }) {
    switch (type) {
    case FETCH_REPORTS_START:
        return {
            ...state,
            started: true
        };
    case FETCH_REPORTS_SUCCESS:
        return {
            ...state,
            started: false,
            error: false,
            data: payload.reports
        };
    case FETCH_REPORTS_ERROR:
        return {
            ...state,
            started: false,
            error: true
        };
    default:
        return state;
    }
}
