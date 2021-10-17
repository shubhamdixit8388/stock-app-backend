const mongoose = require('mongoose');

const getIndicesNSE = new mongoose.Schema({
  data: Object,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
})

module.exports = mongoose.model('GetIndicesNSE', getIndicesNSE);
