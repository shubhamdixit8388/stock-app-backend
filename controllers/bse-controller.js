const stockExchangeService = require("../services/stock-exchange-service");
const GetIndicesBSE = require("../models/get-indices-bse-model");

exports.getIndices = (req, res) => {
  stockExchangeService
    .getIndices("https://api.bseindia.com/bseindia/api/Indexmasternew/GetData")
    .then(async (result) => {
      let getIndicesBSE;
      if (result && result.data.data && result.data.data.length) {
        await GetIndicesBSE.findOneAndDelete();
        getIndicesBSE = await GetIndicesBSE.create(result.data);
      } else {
        getIndicesBSE = await GetIndicesBSE.findOne();
      }
      res.status(200).send({
        status: 200,
        message: "Success",
        data: getIndicesBSE,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: "500",
        message: error.message,
      });
    });
};
