import { JOIN_SUCCESS } from "../actions/strava";

const initialState = {};

export default function registration(state = initialState, { type, payload }) {
    switch (type) {
        case JOIN_SUCCESS:
            return {
                ...initialState,
                user: payload
            };
        default:
            return state;
    }
}
