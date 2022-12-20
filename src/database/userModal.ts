import { Schema, Document } from "mongoose";
import moongose from "mongoose";
import { CollectionNames } from "./collectionNames";
import { UserTypeDB } from "../types/type_user";

const UserSchema = new Schema<UserTypeDB>({
  username: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true, select: false },
  salt: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

export default moongose.model<UserTypeDB & Document>(
  CollectionNames.User,
  UserSchema
);
