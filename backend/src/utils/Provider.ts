import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import { User, IUser } from "../models/User";

export const connectPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: process.env.GOOGLE_CALL_BACKURL!,
      },
      async function (accessToken, refreshToken, profile, done) {
        // Database connection
        const user = await User.findOne({
          googleId: profile.id,
        });

        console.log("USER from provider", user);

        if (!user) {
          const newUser = await User.create({
            name: profile.displayName,
            photo: profile.photos ? profile.photos[0]?.value : undefined,
            googleId: profile.id,
            email: profile.emails ? profile.emails[0]?.value : undefined,
          });

          return done(null, newUser);
        } else {
          return done(null, user);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    console.log("seriallize", user);
    done(null, user);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);

    done(null, user);
  });
};
