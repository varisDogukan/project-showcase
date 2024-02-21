import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors";
import { NextFunction, Request, Response } from "express";
import User from "../models/UserModel";

function withValidationErrors(validateValues: any) {
  return [
    validateValues,
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessages = errors
          .array()
          .map((error) => error.msg)
          .join(", ");
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
}

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name: name is required"),
  body("email")
    .notEmpty()
    .withMessage("email: email is required")
    .isEmail()
    .withMessage("email: invalid email format")
    .custom(async (email: string) => {
      const user = await User.findOne({ email });

      if (user) {
        throw new BadRequestError("email: email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password: password is required")
    .isLength({ min: 8 })
    .withMessage("password: password must be at least 8 characters long"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email: email is required")
    .isEmail()
    .withMessage("email: invalid email format"),
  body("password").notEmpty().withMessage("password: password is required"),
]);
