import { ObjectId } from "mongoose";

export type UserTypeDB = {
  username: string;
  password: string;
  salt: string;
  isAdmin: Boolean;
};
export type UserType = Omit<UserTypeDB, "password" | "salt"> & {
  _id: ObjectId;
};
