import mongoose from 'mongoose';
import { CollectionNames } from './collectionNames';


const typesSchema = new mongoose.Schema({
  name: {type: String, unique:true},
  offense: [[{name:String, multiplier:Number}]],
  defense: [[{name:String, multiplier:Number}]]
})

typesSchema.methods.getStrenghts = function getOffenseStrenghts(type: String){
  if (type === "offense") this.offense.filter((element: number[])=> element[1] == 2);
  if (type === "defense") this.offense.filter((element: number[])=> element[1] == 0.5);
  else throw 'type (offense or defense) is not correct';
}
typesSchema.methods.getWeakness = function getStrenghts(type: String){
  if (type === "offense") this.offense.filter((element: number[])=> element[1] == 0.5);
  if (type === "defense") this.offense.filter((element: number[])=> element[1] == 2);
  else throw 'type (offense or defense) is not correct';
}

const typeModel = mongoose.model(CollectionNames.Type, typesSchema);
export default typeModel;