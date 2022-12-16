import mongoose from 'mongoose';
import { typeModel } from '../database';

import typesStructure = require("../types/type_structure");
let typesConfig : typesStructure.Types = require("./config/types_data.json");

const insert:Boolean = false;

if (insert){
  typesConfig.types.map(async elem => {
    await typeModel.create({
      name:elem,
      offense: [[{name:'neutral', multiplier: typesConfig.offense[elem][0]}], 
                [{name:'fire', multiplier: typesConfig.offense[elem][1]}], 
                [{name:'water', multiplier: typesConfig.offense[elem][2]}], 
                [{name:'nature', multiplier: typesConfig.offense[elem][3]}], 
                [{name:'electric', multiplier: typesConfig.offense[elem][4]}],
                [{name:'earth', multiplier: typesConfig.offense[elem][5]}],
                [{name:'mental', multiplier: typesConfig.offense[elem][6]}],
                [{name:'wind', multiplier: typesConfig.offense[elem][7]}],
                [{name:'digital', multiplier: typesConfig.offense[elem][8]}],
                [{name:'melee', multiplier: typesConfig.offense[elem][9]}],
                [{name:'crystal', multiplier: typesConfig.offense[elem][10]}],
                [{name:'toxic', multiplier: typesConfig.offense[elem][11]}]],

      defense: [[{name:'neutral', multiplier: typesConfig.defense[elem][0]}], 
                [{name:'fire', multiplier: typesConfig.defense[elem][1]}], 
                [{name:'water', multiplier: typesConfig.defense[elem][2]}], 
                [{name:'nature', multiplier: typesConfig.defense[elem][3]}], 
                [{name:'electric', multiplier: typesConfig.defense[elem][4]}],
                [{name:'earth', multiplier: typesConfig.defense[elem][5]}],
                [{name:'mental', multiplier: typesConfig.defense[elem][6]}],
                [{name:'wind', multiplier: typesConfig.defense[elem][7]}],
                [{name:'digital', multiplier: typesConfig.defense[elem][8]}],
                [{name:'melee', multiplier: typesConfig.defense[elem][9]}],
                [{name:'crystal', multiplier: typesConfig.defense[elem][10]}],
                [{name:'toxic', multiplier: typesConfig.defense[elem][11]}]]
    });
  });
}