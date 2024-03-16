import mongoose, { Document, Model } from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  photo: string;
  email: string;
  googleId: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

const userSchema = new mongoose.Schema(
  {
    _id: String,
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

export const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
