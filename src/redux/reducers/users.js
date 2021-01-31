import {USER_BY_ID, USERS} from '../actions/users';

const initialState = {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS.SUCCESS:
      return {
        ...state,
        ...action.users.reduce((acc, cur, i) => {
          acc[cur.id] = {
            ...acc[cur.id],
            ...cur,
          };
          return acc;
        }, {}),
      };
    case USER_BY_ID.SUCCESS:
      return {
        ...state,
        [action.user.id]: action.user,
      };
    default:
      return state;
  }
};

export default usersReducer;
