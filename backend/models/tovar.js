const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tovarSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: [String],
  lang: String,
  date: String,
  tracklist: [
    {
        trackTitle: String,
        feats: [String]
    }
  ],
  description: [String],
  yandex: String
});

const Tovar = mongoose.model("Tovar", tovarSchema);

module.exports = Tovar;