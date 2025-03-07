import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://admin:saras1994@cluster0.5bhux6s.mongodb.net/food-delivery"
    )
    .then((conn) => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
