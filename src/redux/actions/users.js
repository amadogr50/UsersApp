const USERS = {
  REQUEST: 'USERS.REQUEST',
  SUCCESS: 'USERS.SUCCESS',
  ERROR: 'USERS.ERROR',
};

const USER_BY_ID = {
  REQUEST: 'USER_BY_ID.REQUEST',
  SUCCESS: 'USER_BY_ID.SUCCESS',
  ERROR: 'USER_BY_ID.ERROR',
};

const getUsersRequest = () => ({
  type: USERS.REQUEST,
});

const getUsersSuccess = (users) => ({
  type: USERS.SUCCESS,
  users,
});

const getUsersError = (error) => ({
  type: USERS.ERROR,
  error,
});

const getUserByIdRequest = (id) => ({
  type: USER_BY_ID.REQUEST,
  id,
});

const getUserByIdSuccess = (user) => ({
  type: USER_BY_ID.SUCCESS,
  user,
});

const getUserByIdError = (error) => ({
  type: USER_BY_ID.ERROR,
  error,
});

export {
  USERS,
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
  USER_BY_ID,
  getUserByIdRequest,
  getUserByIdSuccess,
  getUserByIdError,
};
