const axios = require("axios");
const csvTojs = require("../utils/csv2Json");

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
//
// exports.get = (url, headers) => {
//   console.log('Url: ', url)
//   return axios.get(url, {
//     transformResponse: [
//       function (data) {
//         return csvTojs(data, headers || null);
//       },
//     ],
//   });
// };
