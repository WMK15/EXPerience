import axios from "axios";
const apiURI = "http://localhost:3002/api/auth";

export const login = async (username, password) => {
  try {
    const response = await axios.post(
      `${apiURI}/login`,

      {
        username,
        password,
      }
    );

    // Handle the response here
    console.log(response.data);
  } catch (error) {
    // Handle any errors here
    console.error(error);
  }
};
