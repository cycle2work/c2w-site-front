export const JOIN_START = "JOIN_START";
export const JOIN_SUCCESS = "JOIN_SUCCESS";
export const JOIN_ERROR = "JOIN_ERROR";

export function joinNow() {
    return dispatch => {
        dispatch({
            type: JOIN_START
        });
    };
}
