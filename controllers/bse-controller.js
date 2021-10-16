const bseService = require("../services/bse-service");

exports.getGainers = (req, res) => {
  bseService
    .getGainers()
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
