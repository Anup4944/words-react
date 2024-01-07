import mongoose, { Document } from "mongoose";

interface IUser {
  name: string;
  photo: string;
  email: string;
  googleId: string;
}

export interface IUserDocument extends IUser, Document {
  id: string;
}

const userSchema = new mongoose.Schema<IUserDocument>(
  {
    name: String,
    photo: String,
    email: String,
    googleId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IUserDocument>("User", userSchema);
