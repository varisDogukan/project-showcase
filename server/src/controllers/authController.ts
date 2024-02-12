import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import User from "../models/UserModel";
import { hashPassword } from "../utils/passwordUtils";

export async function register(req: Request, res: Response) {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ mgs: "user created" });
}
