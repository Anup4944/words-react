import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(process.env.MONGO_CLIENT as string)
    .then((con) =>
      console.log(`Database connection sucessfull ${con.connection.host}`)
    );
};
