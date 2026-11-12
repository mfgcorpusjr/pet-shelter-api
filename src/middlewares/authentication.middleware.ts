import type { Request, Response, NextFunction } from "express";

import { UnauthorizedError } from "../utils/error.js";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { password } = req.query;

  if (password === "please") {
    next();
  } else {
    throw new UnauthorizedError("Unauthorized. You must say 'please'.");
  }
};
