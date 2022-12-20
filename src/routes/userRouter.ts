import express, { NextFunction, Request, Response } from "express";
import { createSalt, encryptPassword } from "../utils/crypto";
import { userService } from "../services";
import HttpError from "../utils/httpError";
import { validatePassword } from "../services/userService";
import { catchError } from "../utils/requestUtils";
import { UserModel } from "../database";
const router = express.Router();

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Mongoose user id
  const _id = req.session?._id;
  if (!_id) return res.status(401).send("Authorization header is empty");
  UserModel.findOne({ _id })
    .exec()
    .then((user) => {
      if (user) {
        req.user = user;
        next();
      } else {
        // User not found. Detroy session for login again
        req.session.destroy((err) => {
          if (err) return catchError(res, err);
          res.status(401).send("Need login");
        });
      }
    })
    .catch(catchError(res));
};
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .send(
        (!username ? "Username is required. " : "") +
          (!password ? "Password is required" : "")
      );
  createSalt((err, newSalt) => {
    if (err) return res.status(500).send("Salt not created");
    //crypt password
    encryptPassword(password, newSalt, (err, encryptedPassword) => {
      if (err) return res.sendStatus(500);
      UserModel.findOne({ username })
        .exec()
        .then((user) => {
          if (user) {
            return res.status(400).send("exited user");
          }
          // const profile = new Profile(req.body)
          // const error = profile.validateSync(Object.keys(Profile.schema.paths).filter(key => key!=='user'))
          // if(error) return res.status(400).send(error.message)
          return (
            UserModel.create({
              username,
              password: encryptedPassword,
              salt: newSalt,
            })
              // .then((user)=>{
              //     return Profile.create({
              //         name,
              //         subName,
              //         birthday,
              //         user:user._id
              //     })
              //     .catch(err => {
              //         User.remove({_id:user.id})
              //         throw err
              //     })
              // })
              .then(() => res.sendStatus(201))
              .catch(catchError(res))
          );
        });
    });
  });
});
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  userService
    .validatePassword(username, password)
    .then((user) => {
      if (user) {
        req.session._id = user._id?.toString();
        // return Profile.findOne({user:user._id}).exec().then((profile)=>{
        //     const profileData = profile?.toJSON() ?? {empty:true}
        //     res.send({ token,...profileData })
        // }).catch(catchError(res))
        res.send();
      } else
        catchError(res, new HttpError("user or/and password incorrect", 401));
    })
    .catch(catchError(res));
});
router.post("/change-password", isAuthenticated, (req, res) => {
  const { password, newPassword } = req.body;
  const user = req.user;
  if (!user) return res.status(500).send("User not found");
  if (!password || !newPassword)
    return res
      .status(400)
      .send("username password and new password is required");
  validatePassword(user?.username, password)
    .then((user) => {
      if (!user)
        return catchError(
          res,
          new HttpError("incorrect user or password", 403)
        );
      encryptPassword(newPassword, user.salt, (err, pass) => {
        if (err) return catchError(res, err);
        user.password = pass;
        user
          .save()
          .then(() => res.sendStatus(201))
          .catch(catchError(res));
      });
    })
    .catch(catchError(res));
});
router.get("/self/id", isAuthenticated, (req, res) =>
  res.send(req.session._id)
);
export default router;
