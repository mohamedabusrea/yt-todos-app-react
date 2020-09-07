export const fetchData = (key) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : false;
}

export const saveToDB = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}