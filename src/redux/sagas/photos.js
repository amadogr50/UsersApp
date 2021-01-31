import {call, put, takeEvery} from 'redux-saga/effects';
import {getPhotosByAlbum} from '../../modules/api';
import {getPhotosByAlbumError, PHOTOS_BY_ALBUM} from '../actions/photos';

function* workPhotosByAlbum(id) {
  try {
    const photos = yield call(getPhotosByAlbum, id);
    yield put(getPhotosByAlbum(photos));
  } catch (e) {
    yield put(getPhotosByAlbumError(e));
  }
}

export default function* photosWatcher() {
  yield takeEvery(PHOTOS_BY_ALBUM.REQUEST, workPhotosByAlbum);
}
