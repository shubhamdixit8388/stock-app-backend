const stockExchangeService = require("../services/stock-exchange-service");
const StockExchange = require("../models/stock-exchange-model");

exports.getIndices = (req, res) => {
  stockExchangeService
    .getIndices("https://api.bseindia.com/bseindia/api/Indexmasternew/GetData")
    .then(async (result) => {
      if (result && result.data.data && result.data.data.length) {
        let query = {_id: '616c2d4c3250fc3150da01b0'};
        const data = {$set: {'bse.allIndices.data': result.data.data}}
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
                  stockType: "BSE",
                  data: doc.bse.allIndices.data,
                });
              }
            });
      } else {
        const data = await StockExchange.findOne({}, {'bse.allIndices.data': 1});
        res.status(200).send({
          status: 200,
          message: "Success",
          stockType: "BSE",
          data: data.bse.allIndices.data,
        });
      }
    })
    .catch(async () => {
      const data = await StockExchange.findOne({}, {'bse.allIndices.data': 1});
      res.status(200).send({
        status: 200,
        message: "Success",
        stockType: "BSE",
        data: data.bse.allIndices.data,
      });
    });
};
