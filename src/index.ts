import express, { type Request, type Response } from "express";
import cors from "cors";

import petRoutes from "./features/pet/pet.routes.js";
import { catchAll, error } from "./middlewares/error.middleware.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ success: true, message: "Pet Shelter API" });
});

app.use("/api/pets", petRoutes);

app.use(catchAll);
app.use(error);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
