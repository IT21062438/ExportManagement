const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  ProductID: {
    type: String,
    required: true,
  },
  BuyerID: {
    type: String,
    required: true,
  },
  ProductType: {
    type: String,
    required: true,
  },
  QualityRate: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },

  QTY: {
    type: String,
    required: false,
  },
  CheckedDate: {
    type: Date,
    required: false,
  },
  RequirementSatisfication: {
    type: String,
    required: false,
  },
  Description: {
    type: String,
    required: false,
  },

  OrderID: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("postsQC", postSchema);
