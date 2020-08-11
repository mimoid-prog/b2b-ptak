const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const visitorSchema = new mongoose.Schema(
  {
    company: { type: String, maxlength: 40, required: true },
    name: { type: String, maxlength: 40, required: true },
    email: { type: String, maxlength: 40, required: true, unique: true },
    phone: { type: String, maxlength: 12, required: true },
    nip: { type: String, maxlength: 12, required: true },
    qr: { type: String },
  },
  {
    timestamps: true,
  }
)

visitorSchema.plugin(uniqueValidator)

const Visitor = mongoose.model("Visitor", visitorSchema)

module.exports = Visitor
