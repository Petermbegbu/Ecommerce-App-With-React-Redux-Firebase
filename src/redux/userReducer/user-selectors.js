import { createSelector } from "reselect";

//This gets the redux state from the rootReducer
const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
