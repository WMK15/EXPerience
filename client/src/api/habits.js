import axios from "axios";

const API_URL = "http://localhost:3002/api/habits";

export const getHabits = async (userId) => {
  return axios.get(`${API_URL}/${userId}`);
};

export const createHabit = async (habit) => {
  return axios
    .post(`${API_URL}/create`, habit, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
};
