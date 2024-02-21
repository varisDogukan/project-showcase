import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import User from "../models/UserModel";
import { comparePassword, hashPassword } from "../utils/passwordUtils";
import { UnauthenticatedError } from "../errors/customErrors";
import { createJWT } from "../utils/tokenUtils";

export async function register(req: Request, res: Response) {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ mgs: "user created" });
}

export async function login(req: Request, res: Response) {
  const user = await User.findOne({ email: req.body.email });

  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) throw new UnauthenticatedError("invalid credentials");

  const token = createJWT({ userId: user._id });

  const oneDay = 1000 * 60 * 60 * 24; // 1 day milisecond

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).json({ msg: "user logged in" });
}
