import passport from "passport";
import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";

import socialStrategy from "../configStrategies";
import user from "../../database/models";

const User = user.User;

const googleCallback = async (accessToken, refreshToken, profile, done) => {
  const userObj = {};
  const email = profile.emails[0].value;
  const username = profile.displayName.split(" ")[0] + Date.now();

  userObj.email = email;
  userObj.username = username;

  const googleuser = await User.findOne({ where: { email: email } });

  if (googleuser) {
    return done(null, googleUser);
  }

  const newUser = await User.create(userObj);
  userObj.id = newUser.id;
  return done(null, userObj);
};

const googleStrategy = () => {
  passport.use(new GoogleStrategy(socialStrategy.google, googleCallback));
};
export default googleStrategy;
