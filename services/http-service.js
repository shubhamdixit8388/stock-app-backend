const axios = require("axios");
// const csvTojs = require("../utils/csv2Json");

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

exports.get = (url) => {
  return axios.get(url);
};

exports.getAllIndices = (url) => {
  return axios({
    method: "GET",
    url: url,
    params: {
      json: {
        flag: "",
        ln: "en",
        pg: "1",
        cnt: "10000",
        fields: "1,2,3,4,5,6,7",
        hmpg: "1",
      },
    },
  }).then((response) => {
    return {
      ...response,
      data: response
    };
  });
}
