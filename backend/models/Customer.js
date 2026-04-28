const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  address: String,
  mobile: String,
  altMobile: String,
  company: {
    type: String,
    enum: ["Airtel", "Jio", "Vi", "BSNL"]
  },
  currentMonthDate: Date,
  nextMonthDate: Date,
  afterTwoMonthsDate: Date,

  ninetyDaysDate: Date,
  firstRechargeDate: Date,

  pending: String,
  lastRechargePrice: String,
  extra2: String

}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);