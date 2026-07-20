import OpenAI from "openai";
import config from "../config";

export const openRouter = new OpenAI({
    apiKey: config.open_router,
    baseURL: "https://openrouter.ai/api/v1"
})