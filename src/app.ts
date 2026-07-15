import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./config";
import cookieParser from "cookie-parser";
import { authRouter } from "./modules/auth/auth.routes";
import { globalError } from "./error/globalError/globalError";

const app: Application = express();

// middleware
app.use(cors({
    origin: config.app_url,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(cookieParser());

// root
app.get("/", async (req: Request, res: Response) => {
  res.send("Ai");
});


// auth routes
app.use("/api/auth", authRouter);



// globalError
app.use(globalError)


export default app;