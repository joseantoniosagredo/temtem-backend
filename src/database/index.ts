import mongoose from 'mongoose';
import typeModel from './typeModel'

console.log(process.env.MONGO_URI);

const url:string = process.env.MONGO_URI ?? '';
mongoose.connect(url);

export {typeModel};