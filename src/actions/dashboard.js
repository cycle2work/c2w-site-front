import axios from "axios";
import moment from "moment";

import { AWS_DASHBOARD_API } from "../config";

export const FETCH_DASHBOARD_START = "FETCH_DASHBOARD_START";
export const FETCH_DASHBOARD_SUCCESS = "FETCH_DASHBOARD_SUCCESS";
export const FETCH_DASHBOARD_ERROR = "FETCH_DASHBOARD_ERROR";

// We need the user to select the club that would be enrolled to cycle2work
// now we're hard coding our club only for testing purposes
export const fetchDashboardData = (clubId = 148440) => {
    return dispatch => {
        dispatch({
            type: FETCH_DASHBOARD_START
        });

        const years = [moment.utc().year(), moment.utc().year() - 1];

        axios
            .get(`${AWS_DASHBOARD_API}?clubId=${clubId}&years=${years}`)
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
};
