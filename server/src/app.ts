import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";

// database
import connectDB from "./database/connect";

// routes
import authRouter from "./routes/authRouter";

dotenv.config();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

// routes
const base = "/api/v1";

app.use(`${base}/auth`, authRouter);

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
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL as string);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();

export default app;
