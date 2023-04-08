import axios from "axios";

const baseURL = process.env.NODE_ENV === "production"
 ? "https://winter-star-599.fly.dev/api/"
  : "http://localhost:8080/api/"

  console.log('%c⚙️ Server running in ', 'color: orange; font-weight: bold; background-color: black; padding: 4px;', process.env.NODE_ENV + ' mode');


const newRequest = axios.create({
  baseURL,
  withCredentials: true,
});

export default newRequest;
