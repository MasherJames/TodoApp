import dotenv from "dotenv";

dotenv.config();
const socialConfig = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    profileFields: ["id", "emails", "displayName"]
  }
};
export default socialConfig;
