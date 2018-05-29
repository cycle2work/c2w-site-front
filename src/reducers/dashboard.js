import {
    FETCH_DASHBOARD_START,
    FETCH_DASHBOARD_SUCCESS,
    FETCH_DASHBOARD_ERROR
} from "../actions/dashboard";

const defaultState = {
    started: false,
    success: false,
    error: false,
    activities: [],
    club: {
        activities: []
    }
};

export default function dashboard(state = defaultState, { type, payload }) {
    switch (type) {
        case FETCH_DASHBOARD_START:
            return {
                ...state,
                started: true
            };
        case FETCH_DASHBOARD_SUCCESS:
            return {
                ...state,
                started: false,
                error: false,
                activities: payload.activities || [],
                club: payload.club || { activities: [] }
            };
        case FETCH_DASHBOARD_ERROR:
            return {
                ...state,
                started: false,
                error: true
            };
        default:
            return state;
    }
}
