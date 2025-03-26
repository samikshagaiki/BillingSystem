const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  category: { type: String, enum: ["Govigyan", "Medicinal"], required: true },
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Bill", billSchema);