import { Document } from "mongoose";
import { UserType } from "./types/type_user";

declare global {
  export namespace Express {
    export interface Request {
      user?: UserType & Document;
    }
  }
}
declare module "express-session" {
  export interface SessionData {
    _id: string;
  }
}
