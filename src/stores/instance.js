import axios from "axios";
export const baseUrl = "http://localhost:8000";

export const instance = axios.create({
  baseURL: `${baseUrl}`,
});
