const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  const data = res.json();
  if (res.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export const getUserById = async (id) => {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  const data = res.json();
  if (res.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export const getAlbumsByUser = async (id: String) => {
  const res = await fetch(`${BASE_URL}/users/${id}/albums`);
  const data = res.json();
  if (res.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export const getPhotosByAlbum = async (id: String) => {
  const res = await fetch(`${BASE_URL}/albums/${id}/photos`);
  const data = res.json();
  if (res.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};
