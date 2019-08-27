import * as actionTypes from "../constants";
const initialState = {
  isloading: false,
  error: null,
  data: [],
  query: "index",
  videoId: ""
};

const reducer = (state = initialState, action) => {
  console.log("action", action.payload);
  if (action.type == actionTypes.GET_VIDEOS_ATTEMPT) {
    return {
      ...state,
      isloading: true
    };
  }
  if (action.type == "QUERY") {
    return {
      ...state,
      query: action.payload
    };
  } else if (action.type == actionTypes.GET_VIDEOS_SUCCESS) {
    return {
      ...state,
      data: [...action.payload],
      isloading: false
    };
  } else if (action.type == actionTypes.GET_VIDEOS_FAIL) {
    return {
      ...state,
      data: [...action.payload],
      isloading: false,
      error: action.payload
    };
  } else {
    return state;
  }
};
export default reducer;
