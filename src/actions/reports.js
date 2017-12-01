import axios from "axios";
import moment from "moment";

import { AWS_REPORTS_API } from "../config";

export const FETCH_REPORTS_START = "FETCH_REPORTS_START";
export const FETCH_REPORTS_SUCCESS = "FETCH_REPORTS_SUCCESS";
export const FETCH_REPORTS_ERROR = "FETCH_REPORTS_ERROR";

export function fetchReports(month = moment.utc().subtract({ month: 1 }).format("MM")) {
    return dispatch => {
        dispatch({
            type: FETCH_REPORTS_START
        });

        axios.get(`${AWS_REPORTS_API}?month=${month}`).then(result => {
            dispatch({
                type: FETCH_REPORTS_SUCCESS,
                payload: result.data
            });
        }).catch((error) => {
            dispatch({
                type: FETCH_REPORTS_ERROR,
                payload: error
            });
        });
    };
}
