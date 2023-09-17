import axios from "./custumize-axios";

const fetchAllUser = () => {
  return axios.get("/api/users?page=1");
};

const loginApi = (email, pass) => {
  return axios.post("/api/login", { email, pass });
};

export { fetchAllUser, loginApi };
