import {createSelector} from 'reselect';

const albumsSelector = (state) => state.albums;

const getAlbumsByUserFactory = (userId) =>
  createSelector(albumsSelector, (albums) => {
    const userAlbums = albums.albums_by_user[userId];
    if (!userAlbums) {
      return [];
    }

    return userAlbums.map((albumId) => albums.data[albumId]);
  });

export {getAlbumsByUserFactory};
