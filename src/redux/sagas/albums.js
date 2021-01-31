import {call, put, takeEvery} from 'redux-saga/effects';
import {
  ALBUMS_BY_USER,
  getAlbumsByUserError,
  getAlbumsByUserSuccess,
} from '../actions/albums';
import {getAlbumsByUser} from '../../modules/api';

function* workAlbumsByUser({id}) {
  try {
    const albums = yield call(getAlbumsByUser, id);
    yield put(getAlbumsByUserSuccess(albums, id));
  } catch (e) {
    yield put(getAlbumsByUserError(e));
  }
}

export default function* albumsWatcher() {
  yield takeEvery(ALBUMS_BY_USER.REQUEST, workAlbumsByUser);
}
