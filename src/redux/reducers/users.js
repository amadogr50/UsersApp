import {USERS} from '../actions/users';

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  if (action.type === USERS.SUCCESS) {
    return {...state, users: [...action.users]};
  }
  return state;
};

export default usersReducer;
