import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

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

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
