import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/IUser";

const UserSchema: Schema<IUser> = new mongoose.Schema<IUser>({
  name: String,
  email: String,
  password: String,
});

export default mongoose.model<IUser>("User", UserSchema);
