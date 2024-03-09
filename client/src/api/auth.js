import axios from "axios";
const apiURI = "http://localhost:3002/api/auth";

export const login = async (username, password) => {
  return axios.post(`${apiURI}/login`, {
    username,
    password,
  });
};
