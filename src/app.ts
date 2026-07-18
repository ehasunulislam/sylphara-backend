import express, { Application, Request, Response } from "express";
import cors from "cors";
import config from "./config";
import cookieParser from "cookie-parser";
import { authRouter } from "./modules/auth/auth.routes";
import { globalError } from "./error/globalError/globalError";
import { conversationRouter } from "./modules/conversation/conversation.route";
import { adminRouter } from "./modules/admin/admin.routes";
import { messageRoutes } from "./modules/message/message.routes";
import { aiRouter } from "./modules/ai/ai.route";

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

// conversation routes
app.use("/api/conversation", conversationRouter); 


// message routes
app.use("/api/message", messageRoutes); 


// ai routes
app.use("/api/ai", aiRouter)


// admin routes
app.use("/api/admin", adminRouter); 


// globalError
app.use(globalError)


export default app;