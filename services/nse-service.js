const http = require("./http-service");

exports.getGainers = () => {
  return http.get(
    "https://www1.nseindia.com/live_market/dynaContent/live_analysis/gainers/niftyGainers1.json");
};
