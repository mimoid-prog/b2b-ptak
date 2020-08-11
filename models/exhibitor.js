const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const exhibitorSchema = new mongoose.Schema(
  {
    company: { type: String, maxlength: 40, required: true },
    name: { type: String, maxlength: 40, required: true },
    email: { type: String, maxlength: 40, required: true, unique: true },
    phone: { type: String, maxlength: 12, required: true },
    nip: { type: String, maxlength: 12, required: true },
  },
  {
    timestamps: true,
  }
)

exhibitorSchema.plugin(uniqueValidator)

const Exhibitor = mongoose.model("Exhibitor", exhibitorSchema)

module.exports = Exhibitor
