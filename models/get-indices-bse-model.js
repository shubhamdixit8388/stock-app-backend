const mongoose = require('mongoose');

const getIndicesBSE = new mongoose.Schema({
  data: Object,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
})

module.exports = mongoose.model('GetIndicesBSE', getIndicesBSE);
