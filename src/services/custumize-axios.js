import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in",
});

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(
//   function (response) {
//     return response.data ? response.data : { statusCode: response.status };
//   },
//   function (error) {
//     console.log("check error", error.name);
//     console.log("check error", error.response);
//     return Promise.reject(error);
//   }
// );

export default instance;
