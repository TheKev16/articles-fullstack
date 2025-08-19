const mongoose = require('mongoose');

const schArticle = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  comments: [{
    comment: { type: String, required: true },
    author: { type: String, required: true }
  }]
});

module.exports = mongoose.model('Articles', schArticle);
