import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://readesg.pythonanywhere.com",
});

export { axiosClient };
