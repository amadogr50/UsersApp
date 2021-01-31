const ids_by_key = (key) => (data) =>
  Object.values(data).reduce((index, row) => {
    index[row[key]] = row.id;
    return index;
  }, {});

export {ids_by_key};
