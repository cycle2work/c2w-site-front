import {SET_REGISTRATION} from "../actions/register";

const initialState = {
    type: false
};

function getRegistrationState () {
    return {
        type: makeRegistration()
    };
}

function makeRegistration () {
    return true;
}

export default function registration (state = initialState, action) {
    const {type} = action;
    switch (type) {
    case SET_REGISTRATION:
        return {
            ...getRegistrationState()
        };
    default:
        return state;
    }
}