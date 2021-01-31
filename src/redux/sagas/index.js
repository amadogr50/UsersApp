import {all} from 'redux-saga/effects';
import usersWatcher from './users';

export default function* () {
  yield all([usersWatcher()]);
}
