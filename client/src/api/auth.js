const axios = require("axios");

const apiURI = "http://localhost:3002/api";

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      `${apiURI}/auth/login`,
      {
        username,
        password,
      },
      {
        header: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    // Handle the response here
    console.log(response.data);
  } catch (error) {
    // Handle any errors here
    console.error(error);
  }
};
