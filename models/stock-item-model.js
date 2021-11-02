const mongoose = require('mongoose');

const stockItemSchema = new mongoose.Schema({
  stockName: {
    type: String,
    required: [true, 'Stock  name is required']
  },
  stockType: {
    type: String,
    required: [true, 'Stock type is required']
  },
  stockInnerItems: [new mongoose.Schema({
    value: Number,
    markColor: String
  },)],
  dateInString: {
    type: String,
    default: new Date().toLocaleString().toString()
  }
}, { timestamps: true })

module.exports = mongoose.model('StockItemSchema', stockItemSchema);
