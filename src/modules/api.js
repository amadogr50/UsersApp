export const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = res.json();
  if (res.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};
