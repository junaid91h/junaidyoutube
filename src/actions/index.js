import axios from "axios";
import * as actionTypes from "../constants";
export const handleQuery = e => {
  console.log(e.target.value);
  return {
    type: "QUERY",
    payload: e.target.value
  };
};

export const getData = () => {
  return dispatch => {
    dispatch({ type: actionTypes.GET_VIDEOS_ATTEMPT });
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=javascript&key=AIzaSyBS7-dA33dcGz9pwF2Q0xmOGfQmt3sqhic"
      )
      .then(res => {
        console.log(res);
        if (res.data) {
          dispatch({
            type: actionTypes.GET_VIDEOS_SUCCESS,
            payload: res.data.items
          });
        } else {
          dispatch({ type: actionTypes.GET_VIDEOS_FAIL, payload: res.error });
        }
      });
  };
  // // return () => {
  // const res = axios
  //   .get(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=javascript

  //     &key=AIzaSyA7InYhaHGvbqEB4bjwmN7tKDmpfF_jtiU`
  //   )
  //   .then(res => res);
  // // };
  // return {
  //   type: "some",
  //   payload: res
  // };
};
