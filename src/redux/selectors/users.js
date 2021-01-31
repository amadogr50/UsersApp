import {createSelector} from 'reselect';

const getUsers = createSelector(
  (state) => state.users,
  (users) => Object.values(users),
);

const getUserByIdFactory = (id) =>
  createSelector(
    (state) => state.users,
    (users) => {
      return users[id];
    },
  );

export {getUsers, getUserByIdFactory};
