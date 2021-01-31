import {call, put, takeEvery} from 'redux-saga/effects';
import {getUsers} from '../../modules/api';
import {getUsersError, getUsersSuccess, USERS} from '../actions/users';

function* workUsers() {
  try {
    const users = yield call(getUsers);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersError(e));
  }
}

export default function* usersWatcher() {
  yield takeEvery(USERS.REQUEST, workUsers);
}
