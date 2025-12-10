import mongoose from "mongoose";

export default async function Connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Db connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
