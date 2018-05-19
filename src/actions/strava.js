import axios from "axios";

import { AWS_USERS_API } from "../config";

export const JOIN_START = "JOIN_START";
export const JOIN_SUCCESS = "JOIN_SUCCESS";
export const JOIN_ERROR = "JOIN_ERROR";

export function joinNow(code) {
    return async dispatch => {
        dispatch({
            type: JOIN_START
        });

        try {
            const { data } = await axios.get(`${AWS_USERS_API}?code=${code}`);

            dispatch({
                type: JOIN_SUCCESS,
                payload: data
            });
        } catch (error) {
            dispatch({
                type: JOIN_ERROR,
                payload: error
            });
        }
    };
}
