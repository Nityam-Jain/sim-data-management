const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  name: String,
  address: String,
  mobile: String,
  altMobile: String,
  company: String,

  currentMonthDate: Date,
  nextMonthDate: Date,
  afterTwoMonthsDate: Date,

  pending: String,
  extra1: String,
  extra2: String

}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);