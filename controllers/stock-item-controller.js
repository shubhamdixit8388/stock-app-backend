
const StockItemModel = require("../models/stock-item-model");

exports.checkBody = (req, res, next) => {
  if (!req.body.stockName || !req.body.stockType || req.body.stockInnerItems.length !== 4) {
    return res.status(400).send({
      status: "fail",
      message: "Invalid data provided in body",
    });
  }
  next();
};

exports.addStockItem = async (req, res) => {
  try {
    const newStockItem = await StockItemModel.create(req.body);
    res.status(201).send({
      status: 'success',
      data: newStockItem
    });
  } catch (error) {
    res.status(400).send({
      status: 'Fail',
      message: error
    });
  }
}
