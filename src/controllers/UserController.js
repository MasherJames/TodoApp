import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user from "../database/models";

const User = user.User;

export default class UserController {
  static registerUser(req, res) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          res.status(400).json({
            error: {
              msg: err
            }
          });
        } else {
          const newUser = User.create({
            username: req.body.username,
            email: req.body.email,
            password: hash
          });
          newUser
            .then(user => {
              return res.status(201).json({
                Message: "Account successfully created",
                newUser
              });
            })
            .catch(error => {
              if (error) {
                return res.status(400).json({
                  Message: "An error occured while creating the user"
                });
              }
            });
        }
      });
    });
  }

  static loginUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ where: { email } }).then(user => {
      if (!user) {
        return res.status(404).json({
          email: `user with email ${email} does not exist`
        });
      }

      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch) {
          return res.status(401).json({
            password: `Incorrect password for ${email}`
          });
        }

        const payload = {
          id: user.id,
          username: user.username,
          email: user.email
        };
        jwt.sign(
          payload,
          process.env.SECRET_KEY,
          { expiresIn: 3600 },
          (err, token) => {
            res.status(200).json({
              message: "succcessfully loggedin",
              token: `Bearer ${token}`
            });
          }
        );
      });
    });
  }

  static socialAuth(req, res) {
    const { id, username, email } = req.user;
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: 3600
    });
    // (err, token) => {
    //   res.status(200).json({
    //     message: "succcessfully loggedin",
    //     token: `Bearer ${token}`
    //   });
    // }
    // );
  }
}
