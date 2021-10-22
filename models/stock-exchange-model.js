const mongoose = require('mongoose');

const stockExchange = new mongoose.Schema({
  bse: {
    allIndices: new mongoose.Schema({
      data: Object
    }, { timestamps: true })
  },
  nse: {
    allIndices: new mongoose.Schema({
      data: Object
    }, { timestamps: true }),
    gainers: new mongoose.Schema({
      data: Object
    }, { timestamps: true })
  }
})

module.exports = mongoose.model('StockExchange', stockExchange);
