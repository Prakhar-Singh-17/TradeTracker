import axios from "axios";

const api = axios.create({
  baseURL: "https://tradetrackerbackend-ja6g.onrender.com", 
  withCredentials: true,
});

export {api as axios};
