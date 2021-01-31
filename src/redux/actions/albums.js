const ALBUMS_BY_USER = {
  REQUEST: 'ALBUMS_BY_USER.REQUEST',
  SUCCESS: 'ALBUMS_BY_USER.SUCCESS',
  ERROR: 'ALBUMS_BY_USER.ERROR',
};

const getAlbumsByUserRequest = (id) => ({
  type: ALBUMS_BY_USER.REQUEST,
  id,
});

const getAlbumsByUserSuccess = (albums, userId) => ({
  type: ALBUMS_BY_USER.SUCCESS,
  albums,
  userId,
});

const getAlbumsByUserError = (error) => ({
  type: ALBUMS_BY_USER.ERROR,
  error,
});

export {
  ALBUMS_BY_USER,
  getAlbumsByUserRequest,
  getAlbumsByUserSuccess,
  getAlbumsByUserError,
};
