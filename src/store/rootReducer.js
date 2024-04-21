import { combineReducers } from "redux";
import { userReducer } from "./users/userReducer";
import { todoReducer } from "./todos/todoReducer";

export const rootReducer = combineReducers({
  users: userReducer,
  todos: todoReducer,
});
