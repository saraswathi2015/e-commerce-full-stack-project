import mongoose from "mongoose";
// import foodModel from "./foodModel";

// const itemSchema = new Schema({
//   _id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: String },
//   category: { type: String },
//   quantity: { type: Number, required: true },
// });

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: "Food Processing",
    },
    data: {
      type: Date,
      default: Date.now(),
    },
    payment: {
      type: Boolean,
      default: false,
    },
  }
  // { minimize: false }
);

const OrderModel =
  mongoose.models.order || mongoose.model("Order", orderSchema);

export default OrderModel;
