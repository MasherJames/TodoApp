import dotenv from "dotenv";

dotenv.config();
const socialConfig = {
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ["id", "emails", "displayName"]
  }
};
export default socialConfig;
