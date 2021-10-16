const http = require("./http-service");

exports.getGainers = () => {
  return http.get(
    "https://www.bseindia.com/Msource/gainers.aspx?ln=en",
    "securityCode,todayClose,pointChange,pointPercent,symbol,url"
  );
};
