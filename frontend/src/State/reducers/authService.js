import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

const register = async (userData) => {
  console.log(69);
  const response = await axios.post(API_URL, userData);
  console.log(70);
  if (response.data) {
    localStorage.setItem("auth", JSON.stringify(response.data.msg));
  }

  return response.data.msg;
};

const authService = {
  register,
};

export default authService;
