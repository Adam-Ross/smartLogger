import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./types";
import { FloatingActionButton } from "materialize-css";

// Actions
// export const getLogs = () => {
//     return async (dispatch) => {
//         // Set loading to true
//         setLoading();
//         // Get the logs
//         const res = await fetch('/logs')
//         const data = await res.json()

//         // Dispatch the logs to the reducer
//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })

//     }

// };

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("http://localhost:5000/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    const msg = "Something went wrong";
    dispatch({
      type: LOGS_ERROR,
      payload: msg,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("http://localhost:5000/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    const msg = "Something went wrong";
    dispatch({
      type: LOGS_ERROR,
      payload: msg,
    });
  }
};
