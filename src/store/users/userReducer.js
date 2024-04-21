import { ADD_USERS } from "./userActions";

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USERS:
      return action.payload;
    default:
      return state;
  }
};
