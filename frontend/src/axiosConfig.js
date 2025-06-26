import axios from "axios";

const isLocal = window.location.hostname === "localhost";

const api = axios.create({
  baseURL: isLocal 
    ? "http://localhost:8080" 
    : "https://tradetrackerbackend-ja6g.onrender.com",
  withCredentials: true,
});

export { api as axios };
