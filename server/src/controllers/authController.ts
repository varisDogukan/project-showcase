import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};
