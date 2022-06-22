import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

const signupUser = async (userData) => {
  console.log(17);
  const response = await axios.post(API_URL, userData);
  console.log(18);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.newUser));
  }

  return response.data;
};

const userService = {
  signupUser,
};

export default userService;
