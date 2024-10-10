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
  date: Date,
  tracklist: [
    {
      id: Number,
      trackTitle: String,
      feats: [String],
    },
  ],
  description: {
    id: Number,
    text: String
  },
  yandex: String,
});

const Tovar = mongoose.model("Tovar", tovarSchema);

module.exports = Tovar;
