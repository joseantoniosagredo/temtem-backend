import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express, { Request } from "express";
import { typeModel } from "./database";
import session, { SessionOptions } from "express-session";
import userRouter from "./routes/userRouter";
const sess: SessionOptions = {
  secret: "keyboard cat",
  cookie: {
    maxAge: 60000,
  },
};

console.log(process.env.MONGO_URI);

const app = express();
const port = 3000;
// prepare porduction enviroment
if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  if (sess.cookie) sess.cookie.secure = true; // serve secure cookies
}
// use session -> set-cookie and get-cookie
app.use(session(sess));
app.use(express.json())
app.use("/api/user", userRouter);
app.get("/api/types", async (req, res) => {
  let types = await typeModel.find().exec();
  res.send(types);
});

app.get("*", (req, res) => res.sendStatus(404));

app.listen(port, () => {
  console.log(
    `\nYour server available at`,
    "\x1b[32m",
    `http://localhost:${port}`
  );
});
