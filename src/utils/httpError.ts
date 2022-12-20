import { Response } from "express"

export default class HttpError extends Error {
  status:number
  constructor(str:string,status:number=500){
    super(str)
    this.status = status
  }
  toResponse(response:Response){
    response.status(this.status).send(this.message)
  }
}