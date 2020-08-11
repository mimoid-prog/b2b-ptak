const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const companySchema = new mongoose.Schema(
  {
    company: { type: String, maxlength: 40, required: true },
    name: { type: String, maxlength: 40, required: true },
    email: { type: String, maxlength: 40, required: true, unique: true },
    phone: { type: String, maxlength: 12, required: true },
    nip: { type: String, maxlength: 12, required: true },
    website: { type: String, maxlength: 50, required: true },
    descPL: { type: String, maxlength: 500, required: true },
    descEN: { type: String, maxlength: 500 },
    accepted: { type: Boolean, required: true },
    hall: { type: String, maxlength: 5 },
    stand: { type: String, maxlength: 5 },
  },
  {
    timestamps: true,
  }
)

companySchema.plugin(uniqueValidator)

const Company = mongoose.model("Company", companySchema)

module.exports = Company
