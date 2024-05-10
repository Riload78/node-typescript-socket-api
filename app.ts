import express, { Request, Response } from "express";
import path = require("node:path");
import logger from "morgan";

const app = express();
app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/api", (req: Request, res: Response) => {
	console.log("GET /api");
	res.send({ ok: true });
});

export default app;