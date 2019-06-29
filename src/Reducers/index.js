import { combineReducers } from "redux";
import postListReducer from "./postListReducer";
import UsersReducer from "./UsersReducers";

export default combineReducers({
  posts: postListReducer,
  users: UsersReducer
});
