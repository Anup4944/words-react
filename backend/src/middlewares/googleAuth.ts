import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/errorHandler";

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["connect.sid"];

  console.log("TOKEN", token);

  if (!token) {
    return next(new ErrorHandler("Not logged in", 401));
  }

  next();
};
