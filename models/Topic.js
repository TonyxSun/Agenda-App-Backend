const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  time_est: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Topic = mongoose.model('topic', TopicSchema);
