import axios from "axios";

const baseURL = process.env.NODE_ENV === "production"
  ? "https://winter-star-599.fly.dev/api/"
  : "http://localhost:8080/api/";

console.log(baseURL);

const newRequest = axios.create({
  baseURL,
  withCredentials: true,
});

export default newRequest;
