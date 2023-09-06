import axios from "axios";

const apiCLient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
});

export const login = async (data) => {
  try {
    return await apiCLient.post("/auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiCLient.post("/auth/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
