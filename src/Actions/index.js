import jsonPlaceHolder from "../APIs/jsonPlaceHolder";
import _ from "lodash";

export const fetchPosts = () => async dispatch => {
  const posts = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: posts.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
