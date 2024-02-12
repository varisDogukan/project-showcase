import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log("Server running...");
});

export default app;
