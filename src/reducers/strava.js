import {
    JOIN_SUCCESS
} from "../actions/strava";

const initialState = {
    user: undefined,
    token: undefined,
    code: undefined
};

export default function registration(state = initialState, { type, payload }) {
    switch (type) {
    case JOIN_SUCCESS:
        return {
            ...initialState,
            code: payload
        }; 
    default:
        return state;
    }
}
