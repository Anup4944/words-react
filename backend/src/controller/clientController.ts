import { Request, Response, NextFunction } from "express";
export const myProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.user);
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    next(error); // Pass the error to the next middleware or error-handling middleware
  }
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        throw err; // Throw an error to be caught by the catch block
      }

      res.clearCookie("connect.sid", {
        secure: true,
        httpOnly: true,
        sameSite: "none",
      });

      res.status(200).json({
        message: "Logged Out",
      });
    });
  } catch (error) {
    next(error); // Pass the error to the next middleware or error-handling middleware
  }
};
