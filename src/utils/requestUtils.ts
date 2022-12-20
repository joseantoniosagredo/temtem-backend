import { Response, NextFunction, Request } from "express";
import { Document } from "mongoose";
import { UserType } from "../types/type_user";
import HttpError from "../utils/httpError";
export type MiddlewareRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
/**
 * Set the param in the query string for filtering data
 * @param param value of param
 * @param key key where the param is setted
 */
export function setQueryString<T>(
  param: string,
  key: { [K in keyof T]: T[K] extends string ? K : never }[keyof T]
): MiddlewareRequest {
  return (req, res, next) => {
    let id = req.params[param];
    ((req.query as unknown as T)[key] as any) = id;
    next();
  };
}
/**
 * Set the para m in the body
 * @param param value of param
 * @param key key where the param is setted
 */
export function setBody<T>(
  param: string,
  key: { [K in keyof T]: T[K] extends string ? K : never }[keyof T]
): MiddlewareRequest {
  return (req, res, next) => {
    let id = req.params[param];
    ((req.body as unknown as T)[key] as any) = id;
    next();
  };
}

export function catchError(res: Response, error?: Error) {
  const validte = (err: Error) => {
    console.log("HEEEERE", err, err instanceof HttpError);
    if (err instanceof HttpError) {
      res.status(err.status).send(err.message);
    } else res.status(500).send(err.message);
  };
  if (error) validte(error);
  return validte;
}
