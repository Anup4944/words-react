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

router.get("/login/acc", (req, res, next) => {
  console.log("got hit");
  passport.authenticate("google", {
    successRedirect: process.env.FRONTEND_URL,
  })(req, res, next);
});

// router.get("/google/profile", isAuthenticated, myProfile);

router.get("/google/profile", (req, res, next) => {
  console.log("Before isAuthenticated middleware");
  isAuthenticated(req, res, (err) => {
    if (err) {
      console.error("Error in isAuthenticated middleware:", err);
      return res
        .status(401)
        .json({ success: false, message: "Not authenticated" });
    }
    console.log("After isAuthenticated middleware");
    myProfile(req, res, next);
  });
});

// router.get("/me", isAuthenticated, myProfile);
router.get("/google/logout", logout);

export default router;
