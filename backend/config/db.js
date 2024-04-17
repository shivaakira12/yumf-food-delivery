import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://shivashanker:abcdefg@cluster0.0gjhmm1.mongodb.net/yumf"
    )
    .then(() => console.log("Connection Established"));
};
