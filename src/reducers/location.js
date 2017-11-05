import { NAVIGATE } from "../actions/location";

export default function location(state = {}, action) {
    const { type, payload } = action;
    switch (type) {
    case NAVIGATE:
        return payload;
    default:
        return state;
    }
}
