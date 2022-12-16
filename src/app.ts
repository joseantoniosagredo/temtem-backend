import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from 'express';
import { typeModel } from './database';

console.log(process.env.MONGO_URI);

const app = express()
const port = 3000

app.get('/api/types', async (req, res) => {
  let types = await typeModel.find().exec();
  res.send(types);
})

app.get('*', (req, res) => res.sendStatus(404));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})