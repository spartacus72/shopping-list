"use strict";
import { logger } from "firebase-functions";
import type { ErrorRequestHandler } from "express";
import { Request, Response } from "express";

const errorHandler: ErrorRequestHandler = (
  err: unknown,
  _req: Request,
  res: Response
) => {
  const error = err as Error;

  const { message, name, stack } = error;

  logger.error("An error has occured.", name, message, stack);

  res.status(500).send({ message, name });
};

export default errorHandler;
