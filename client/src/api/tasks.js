import axios from "axios";

const API_URL = "http://localhost:3002/api/tasks";

export const getTasks = () => {
  return axios
    .get(`${API_URL}/`)
    .then((response) => response.data)
    .then((data) => data.tasks);
};
