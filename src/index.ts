import express, { type Request, type Response } from "express";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";

import { catchAll, error } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(helmet());

app.get("/health", (req: Request, res: Response) => {
  res.json({
    success: true,
    service: "Pet Shelter API",
  });
});

app.use(catchAll);
app.use(error);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}.`);
});
