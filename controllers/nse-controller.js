const stockExchangeService = require("../services/stock-exchange-service");

exports.getGainers = (req, res) => {
  stockExchangeService
    .getGainers("https://www1.nseindia.com/live_market/dynaContent/live_analysis/gainers/niftyGainers1.json")
    .then((result) => {
      res.status(200).send({
        status: 200,
        message: "Success",
        data: result.data,
      });
    })
    .catch(() => {
      res.status(500).send({
        status: "500",
        message: "Failed to load data",
      });
    });
};

exports.getIndices = (req, res) => {
  stockExchangeService
    .getIndices("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/liveIndexWatchData.json")
    .then((result) => {
      res.status(200).send({
        status: 200,
        message: "Success",
        data: result.data,
      });
    })
    .catch(() => {
      res.status(500).send({
        status: "500",
        message: "Failed to load data",
      });
    });
};
