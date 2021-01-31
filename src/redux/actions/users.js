const USERS = {
  REQUEST: 'USERS.REQUEST',
  SUCCESS: 'USERS.SUCCESS',
  ERROR: 'USERS.ERROR',
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

export {USERS, getUsersRequest, getUsersSuccess, getUsersError};
