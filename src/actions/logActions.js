import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "./types";
import { FloatingActionButton } from "materialize-css";

// Search logs
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`http://localhost:5000/logs?q=${text}`);

    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: "Something went wrong in SEARCH_LOGS...",
    });
  }
};

// Update a specific log
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`http://localhost:5000/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: "Something went wrong updating...",
    });
  }
};

// Set current state
export const setCurrent = (log) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CURRENT,
      payload: log,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: "Something went wrong setting current.",
    });
  }
};

export const clearCurrent = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_CURRENT,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: "Something went wrong clearing current...",
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`http://localhost:5000/logs/${id}`, { method: "delete" });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    const msg = "Something went wrong deleting log...";
    dispatch({
      type: LOGS_ERROR,
      paylog: msg,
    });
  }
};

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
