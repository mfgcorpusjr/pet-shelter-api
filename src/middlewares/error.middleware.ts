import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

import { AppError, NotFoundError } from "../utils/error.js";

export const catchAll = (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError("No route found."));
};

export const error = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ZodError) {
    res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: err.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  } else if (err instanceof AppError) {
    res.status(err.statusCode).json({ success: false, message: err.message });
  } else {
    res.status(500).json({
      success: false,
      message: err.message || "An unknown error occurred.",
    });
  }
};
