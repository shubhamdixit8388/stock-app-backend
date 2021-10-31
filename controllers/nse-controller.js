const stockExchangeService = require("../services/stock-exchange-service");
const StockExchange = require("../models/stock-exchange-model");

exports.getGainers = (req, res) => {
  stockExchangeService
      .getGainers("https://www1.nseindia.com/live_market/dynaContent/live_analysis/gainers/niftyGainers1.json")
      .then(async (result) => {
        if (result && result.data.data && result.data.data.length) {
          let query = {_id: '617edc4888fef61b2d64bc07'};
          const data = {$set: {'nse.gainers.data': result.data.data}}
          console.log('_id: ',query);
          StockExchange.findOneAndUpdate(query, data, {new: true}, (err, doc) => {
            if(err) {
              res.status(500).send({
                status: "500",
                message: err.message,
              });
            } else {
              console.log('doc - ', doc)
              console.log('doc - ', doc.nse)
              console.log('doc - ', doc.nse.gainers.data)
              res.status(200).send({
                status: 200,
                message: "Success",
                stockType: "NSE",
                data: doc.nse.gainers.data,
              });
            }
          });
        } else {
          console.log('30');
          const data = await StockExchange.findOne({}, {'nse.gainers.data': 1});
          res.status(200).send({
            status: 200,
            message: "Success",
            stockType: "NSE",
            data: data.nse.gainers.data,
          });
        }
      })
      .catch(async () => {
        console.log('42');
        const data = await StockExchange.findOne({}, {'nse.gainers.data': 1});
        res.status(200).send({
          status: 200,
          message: "Success",
          stockType: "NSE",
          data: data.nse.gainers.data,
        });
      });
};
exports.getLosers = (req, res) => {
  stockExchangeService
      .getGainers("https://www1.nseindia.com/live_market/dynaContent/live_analysis/losers/niftyLosers1.json")
      .then(async (result) => {
        if (result && result.data.data && result.data.data.length) {
          let query = {_id: '617edc4888fef61b2d64bc07'};
          const data = {$set: {'nse.losers.data': result.data.data}}
          StockExchange.findOneAndUpdate(query, data, {new: true}, (err, doc) => {
            if(err) {
              res.status(500).send({
                status: "500",
                message: err.message,
              });
            } else {
              res.status(200).send({
                status: 200,
                message: "Success",
                stockType: "NSE",
                data: doc.nse.losers.data,
              });
            }
          });
        } else {
          const data = await StockExchange.findOne({}, {'nse.losers.data': 1});
          res.status(200).send({
            status: 200,
            message: "Success",
            stockType: "NSE",
            data: data.nse.losers.data,
          });
        }
      })
      .catch(async () => {
        const data = await StockExchange.findOne({}, {'nse.losers.data': 1});
        res.status(200).send({
          status: 200,
          message: "Success",
          stockType: "NSE",
          data: data.nse.losers.data,
        });
      });
};

exports.getIndices = (req, res) => {
  stockExchangeService
      .getIndices("https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/liveIndexWatchData.json")
      .then(async (result) => {
        if (result && result.data.data && result.data.data.length) {
          let query = {_id: '617edc4888fef61b2d64bc07'};
          const data = {$set: {'nse.allIndices.data': result.data.data}}
          StockExchange.findOneAndUpdate(query, data, {new: true}, (err, doc) => {
            if(err) {
              res.status(500).send({
                status: "500",
                message: err.message,
              });
            } else {
              res.status(200).send({
                status: 200,
                message: "Success",
                stockType: "NSE",
                data: doc.nse.allIndices.data,
              });
            }
          });
        } else {
          const data = await StockExchange.findOne({}, {'nse.allIndices.data': 1});
          res.status(200).send({
            status: 200,
            message: "Success",
            stockType: "NSE",
            data: data.nse.allIndices.data,
          });
        }
      })
      .catch(async () => {
        const data = await StockExchange.findOne({}, {'nse.allIndices.data': 1});
        res.status(200).send({
          status: 200,
          message: "Success",
          stockType: "NSE",
          data: data.nse.allIndices.data,
        });
      });
};
