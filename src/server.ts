import app from "./app";
import config from "./config";
import { prisma } from "./lib/prisma";
import { redisClient } from "./lib/redis";

const PORT = config.port;


async function main() {
  try {
    await prisma.$connect();
    console.log("connected to the datebase successfully");

    await redisClient.connect();
    console.log("Redis Connected Successfully");

    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });


  } catch (err) {
    console.log("server is running on error:", err);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
