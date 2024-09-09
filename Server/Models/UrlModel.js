const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const generateShortuuid = () => {
  return uuidv4().replace(/-/g, '').slice(0, 8);
};

const urlSchema = new mongoose.Schema({
  UrlId: {
    type: String,
    required: true,
    unique: true,
    default: generateShortuuid
  },
  redirectUrl: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Url', urlSchema);
