import axios from "axios";

const api = axios.create({
  baseURL: "https://pizzeria-api.azurewebsites.net/api",
  withCredentials: true,
});

export default api;
