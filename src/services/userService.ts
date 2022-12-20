import { Document, ObjectId } from "mongoose";
import { UserModel } from "../database";
import { UserTypeDB } from "../types/type_user";
import { encryptPassword } from "../utils/crypto";
import HttpError from "../utils/httpError";

/**
 * Return user or null
 * @param username
 * @param password
 * @returns
 */
export function validatePassword(username: string, password: string) {
  return new Promise<(UserTypeDB & Document<ObjectId>) | null>((res, rej) => {
    UserModel.findOne({ username })
      .select("+password")
      .exec()
      .then((user) => {
        if (!user) {
          return rej(new HttpError("user or/and password incorrect", 401));
        }
        const { password: passwordDB, salt } = user;
        encryptPassword(password, salt, (err, encryptedPassword) => {
          if (err) return rej(new HttpError("error encrypting passord"));
          if (encryptedPassword === passwordDB) return res(user);
          else res(null);
        });
      });
  });
}
