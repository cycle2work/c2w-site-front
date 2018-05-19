import { REHYDRATE } from "redux-persist/constants";

export default function rehydrated(state = false, action) {
    return action.type === REHYDRATE ? true : state;
}
