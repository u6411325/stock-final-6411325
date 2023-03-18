import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    phone: String,
  },
  { strict: false }
);

module.exports =
  mongoose.models.Supplier || mongoose.model("Supplier", supplierSchema);
