const axios = require("axios");

axios.interceptors.response.use(null, (error) => {
  console.log("error....", error);
  return Promise.reject(error);
});

// const http = {
//   get: axios.get,
//   post: axios.post,
//   put: axios.put,
//   delete: axios.delete,
// };

exports.get = axios.get;
