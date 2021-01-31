import {createSelector} from 'reselect';

const albumsSelector = (state) => state.albums;

const getAlbumsByUserFactory = (userId) =>
  createSelector(albumsSelector, (albums) => {
    return albums.albums_by_user[userId].map((albumId) => albums.data[albumId]);
  });

export {getAlbumsByUserFactory};
