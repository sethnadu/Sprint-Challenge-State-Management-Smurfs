import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE"


export const getSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_START});
        axios 
            .get("http://localhost:3333/smurfs")
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res});
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: error});
            })
    }
}