import express from "express";
import passport from "passport";
const router = express.Router();
import { isAuthenticated } from "../middlewares/googleAuth";
import { logout, myProfile } from "../controller/clientController";

router.get(
  "/google/login",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

router.get(
  "/login/acc",
  passport.authenticate("google", {
    successRedirect: process.env.FRONTEND_URL,
  })
);

router.get("/google/profile", isAuthenticated, myProfile);

// router.get("/me", isAuthenticated, myProfile);
router.get("/google/logout", logout);

export default router;
