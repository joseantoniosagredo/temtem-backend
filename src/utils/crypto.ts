import crypto from 'crypto'

export function encryptPassword(password:string,salt:string,callback:(err:Error|null,salt:string)=>void){
  return crypto.pbkdf2(password.toString(), salt, 10000, 64, 'sha1', (err,key)=>callback(err,key.toString('base64')))
}
/**
 * Create a salt fot a user
 * @param callback Callback
 * @returns 
 */
export function createSalt(callback:(err:Error|null,salt:string)=>void){
  return crypto.randomBytes(16,(err,buffer) => callback(err,buffer.toString('base64')))
}