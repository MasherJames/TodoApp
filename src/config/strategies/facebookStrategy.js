import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import socialStrategy from "../configStrategies";
import user from "../../database/models";

const User = user.User;

const facebookCallback = async (accessToken, refreshToken, profile, done) => {
  const userObj = {};
  const email = profile.emails[0].value;
  const username = profile.displayName.split(" ")[0] + Date.now();

  userObj.email = email;
  userObj.username = username;

  const facebookuser = await User.findOne({ where: { email: email } });

  if (facebookuser) {
    return done(null, facebookUser);
  }

  const newUser = await User.create(userObj);
  userObj.id = newUser.id;
  return done(null, userObj);
};

const facebookStrategy = () => {
  passport.use(new FacebookStrategy(socialStrategy.facebook, facebookCallback));
};
export default facebookStrategy;
