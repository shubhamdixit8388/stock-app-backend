const bseService = require("../services/bse-service");

exports.getIndices = (req, res) => {
  bseService
    .getIndices("https://api.bseindia.com/bseindia/api/Indexmasternew/GetData")
    .then((result) => {
      res.status(200).send({
        status: 200,
        message: "Success",
        data: result.data,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: "500",
        message: error.message,
      });
    });
};
