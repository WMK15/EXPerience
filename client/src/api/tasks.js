import axios from "axios";

const API_URL = "http://localhost:3002/api/tasks";

export const getTasks = async () => {
  return axios
    .get(`${API_URL}/`)
    .then((response) => response.data)
    .then((data) => data.tasks);
};

export const createTask = async (task) => {
  return axios.post(`${API_URL}/`, task).then((response) => response.data);
};
