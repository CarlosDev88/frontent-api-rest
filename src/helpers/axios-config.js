import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:9000/",
  baseURL: "https://backend-node-carlos-carlosdev88.vercel.app/",
});

export { axiosInstance };
