import axios from "axios";
import moment from "moment";

import { AWS_API, AWS_DASHBOARD_API } from "../config";

export const FETCH_DASHBOARD_START = "FETCH_DASHBOARD_START";
export const FETCH_DASHBOARD_SUCCESS = "FETCH_DASHBOARD_SUCCESS";
export const FETCH_DASHBOARD_YEAR_SUCCESS = "FETCH_DASHBOARD_YEAR_SUCCESS";
export const FETCH_DASHBOARD_ERROR = "FETCH_DASHBOARD_ERROR";

// We need the user to select the club that would be enrolled to cycle2work
// now we're hard coding our club only for testing purposes
export const fetchData = (athleteId, clubId = 148440, month = moment.utc().format("MM")) => {
    return dispatch => {
        dispatch({
            type: FETCH_DASHBOARD_START
        });

        axios
            .get(`${AWS_API}?user=${athleteId}&month=${month}`)
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

        axios
            .get(`${AWS_DASHBOARD_API}?athleteId=${athleteId}&clubId=${clubId}`)
            .then(result => {
                dispatch({
                    type: FETCH_DASHBOARD_YEAR_SUCCESS,
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
