import { SET_LOADING, GET_TECHS, ADD_TECH } from "../actions/types";

// Initial state
const initialState = {
  techs: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };

    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        loading: true,
      };

    default:
      return state;
  }
};
