const http = require("./http-service");

exports.getIndices = (url) => {
  return http.get(url);
};
