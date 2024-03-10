import axios from "axios";

const API_URL = "http://localhost:3002/api/habits";

export const getAllHabits = async (userId) => {
  return axios.get(`${API_URL}/${userId}`);
};

export const createHabit = async (habit) => {
  console.log(habit);
  return axios
    .post(`${API_URL}/create`, habit, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
};

export const handlePoints = async (userId, points) => {
  return axios.put(`${API_URL}/${userId}/points`, points, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteHabit = async (taskId) => {
  return axios.delete(`${API_URL}/${taskId}`);
};
