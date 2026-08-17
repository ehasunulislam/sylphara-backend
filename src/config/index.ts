import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.join(process.cwd(), ".env")
});



export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    app_url: process.env.APP_URL,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET!,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN!,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET!,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN!,
    open_router: process.env.OPEN_ROUTER_API_KEY!,
    redis_user: process.env.REDIS_USER!,
    redis_pass: process.env.REDIS_PASS!,
    redis_host: process.env.REDIS_HOST!,
    redis_port: process.env.REDIS_PORT!,
    smtp_user: process.env.SMTP_USER!,
    smtp_pass: process.env.SMTP_PASS!,
    email_sender: process.env.EMAIL_SENDER!
}