import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

// not found
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({ msg: "not found" });
});

// error
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);

  res.status(500).json({ msg: "something went wrong" });
});

const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`Server running on PORT ${port} ...`);
});

export default app;
