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
  items: [{
    type: Boolean,
    default: false
  }]
})

module.exports = mongoose.model('StockItemSchema', stockItemSchema);
