const PHOTOS_BY_ALBUM = {
  REQUEST: 'PHOTOS_BY_ALBUM.REQUEST',
  SUCCESS: 'PHOTOS_BY_ALBUM.SUCCESS',
  ERROR: 'PHOTOS_BY_ALBUM.ERROR',
};

const getPhotosByAlbumRequest = (id) => ({
  type: PHOTOS_BY_ALBUM.REQUEST,
  id,
});

const getPhotosByAlbumSuccess = (photos) => ({
  type: PHOTOS_BY_ALBUM.SUCCESS,
  photos,
});

const getPhotosByAlbumError = (error) => ({
  type: PHOTOS_BY_ALBUM.ERROR,
  error,
});

export {
  PHOTOS_BY_ALBUM,
  getPhotosByAlbumRequest,
  getPhotosByAlbumSuccess,
  getPhotosByAlbumError,
};
