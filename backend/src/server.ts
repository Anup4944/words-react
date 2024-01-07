import express, { urlencoded } from "express";
import authRoutes from "./routes/authRoutes";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { connectDb } from "./config/db";
import { connectPassport } from "./utils/Provider";

const app = express();

const port = process.env.PORT;

connectDb();

app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: false,
      sameSite: "none",
      // secure: process.env.NODE_ENV === "development" ? false : true,
      // httpOnly: process.env.NODE_ENV === "development" ? false : true,
      // sameSite: process.env.NODE_ENV === "development" ? false : "none",
    },
  })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.enable("trust proxy");
connectPassport();

app.use("/api/v1", authRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
