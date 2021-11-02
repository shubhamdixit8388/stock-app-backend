const mongoose = require('mongoose');

const stockExchange = new mongoose.Schema({
  bse: {
    allIndices: new mongoose.Schema({
      data: Object,
      dateInString: {
        type: String,
        default: new Date().toLocaleString().toString()
      }
    }, { timestamps: true })
  },
  nse: {
    allIndices: new mongoose.Schema({
      data: Object,
      dateInString: {
        type: String,
        default: new Date().toLocaleString().toString()
      }
    }, { timestamps: true }),
    gainers: new mongoose.Schema({
      data: Object,
      dateInString: {
        type: String,
        default: new Date().toLocaleString().toString()
      }
    }, { timestamps: true }),
    losers: new mongoose.Schema({
      data: Object,
      dateInString: {
        type: String,
        default: new Date().toLocaleString().toString()
      }
    }, { timestamps: true })
  }
})

module.exports = mongoose.model('StockExchange', stockExchange);
