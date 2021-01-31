import {call, put, takeEvery} from 'redux-saga/effects';
import {getUserById, getUsers} from '../../modules/api';
import {
  getUserByIdError,
  getUserByIdSuccess,
  getUsersError,
  getUsersSuccess,
  USER_BY_ID,
  USERS,
} from '../actions/users';

function* workUsers() {
  try {
    const users = yield call(getUsers);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersError(e));
  }
}

function* workUserById({id}) {
  try {
    const users = yield call(getUserById, id);
    yield put(getUserByIdSuccess(users));
  } catch (e) {
    yield put(getUserByIdError(e));
  }
}

export default function* usersWatcher() {
  yield takeEvery(USERS.REQUEST, workUsers);
  yield takeEvery(USER_BY_ID.REQUEST, workUserById);
}
