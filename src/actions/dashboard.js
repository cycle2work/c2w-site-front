import axios from "axios";
import moment from "moment";

import { AWS_API } from "../config";

export const FETCH_DASHBOARD_START = "FETCH_DASHBOARD_START";
export const FETCH_DASHBOARD_SUCCESS = "FETCH_DASHBOARD_SUCCESS";
export const FETCH_DASHBOARD_ERROR = "FETCH_DASHBOARD_ERROR";

export function fetchData(user, month = moment.utc().format("MM")) {
    return dispatch => {
        dispatch({
            type: FETCH_DASHBOARD_START
        });

        axios
            .get(`${AWS_API}?user=${user}&month=${month}`)
            .then(result => {
                dispatch({
                    type: FETCH_DASHBOARD_SUCCESS,
                    payload: result.data
                });
            })
            .catch(error => {
                dispatch({
                    type: FETCH_DASHBOARD_ERROR,
                    payload: error
                });
            });
    };
}
