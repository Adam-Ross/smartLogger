import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "./types";

export const getTechs = () => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch("http://localhost:5000/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: "Something went wrong getting techs...",
    });
  }
};

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    await fetch("http://localhost:5000/techs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tech),
    });

    dispatch({
      type: ADD_TECH,
      payload: tech,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: "Something went wrong adding tech...",
    });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  setLoading();

  try {
    await fetch(`http://localhost:5000/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHS_ERROR,
      payload: "Something went wrong deleting the tech..",
    });
  }
};

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};

export const techsError = () => {};
