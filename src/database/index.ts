import mongoose from "mongoose";
import typeModel from "./typeModel";
import UserModel from "./userModal";
console.log(process.env.MONGO_URI);

const url: string = process.env.MONGO_URI ?? "";
mongoose.connect(url);

export { typeModel, UserModel };
