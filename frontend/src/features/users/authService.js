import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("auth", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
};

export default authService;
