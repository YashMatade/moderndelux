import axios from "axios";



const BASE_URL = import.meta.env.VITE_API || "http://localhost:1000";


export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});

