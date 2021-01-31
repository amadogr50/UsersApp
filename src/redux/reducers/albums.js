import {ALBUMS_BY_USER} from '../actions/albums';

const initialState = {
  data: {},
  albums_by_user: {},
};

const albumsReducer = (state = initialState, action) => {
  if (action.type === ALBUMS_BY_USER.SUCCESS) {
    return {
      ...state,
      albums_by_user: {
        ...state.albums_by_user,
        [action.userId]: action.albums.map((album) => album.id),
      },
      data: {
        ...state.data,
        ...action.albums.reduce((acc, cur, i) => {
          acc[cur.id] = cur;
          return acc;
        }, {}),
      },
    };
  }
  return state;
};

export default albumsReducer;
