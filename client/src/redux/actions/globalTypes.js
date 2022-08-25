export const GLOBALTYPES = {
  AUTH: "AUTH",
  ALERT: "ALERT",
  SEARCH: "SEARCH",
};

export const DeleteData = (data, id) => {
  const newData = data.filter((item) => item._id !== id);
  return newData;
};
