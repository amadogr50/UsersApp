import {all} from 'redux-saga/effects';
import usersWatcher from './users';
import albumsWatcher from './albums';
import photosWatcher from './photos';

export default function* () {
  yield all([usersWatcher(), albumsWatcher(), photosWatcher()]);
}
