import passJwt from "passport-jwt";
import dotenv from "dotenv";
import user from "../database/models";

dotenv.config();

const User = user.User;

const JwtStrategy = passJwt.Strategy;
const ExtractJwt = passJwt.ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

export default passport => {
  passport.use(
    new JwtStrategy(opts, (pay_load, done) => {
      User.findByPk(pay_load.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => {
          return done(err, false);
        });
    })
  );
};
