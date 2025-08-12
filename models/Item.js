import mongoose from "mongoose";

const caseItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: String,
  price: Number,
  chance: Number, // drop percentage
  case: Number,
  type: String,
  model: String
});

export default mongoose.model("CaseItem", caseItemSchema);

