import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";

// database
import connectDB from "./database/connect";

// routers
import authRouter from "./routes/authRouter";

// middleware
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";

const app = express();
dotenv.config();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req: Request, res: Response) => res.send("Hello World"));

// routes
const base = "/api/v1";
app.use(`${base}/auth`, authRouter);

// not found / errorHandler
app.use("*", (req: Request, res: Response) =>
  res.status(404).json({ msg: "not found" })
);
app.use(errorHandlerMiddleware);

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
