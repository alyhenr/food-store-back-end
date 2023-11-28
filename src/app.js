import "express-async-errors";
import express from "express";

import cors from "cors";

import { connectDb, disconnectDB } from "./config/database.js";
import { clientsRouter } from "./routers/clients-router.js";
import errorsHandler from "./middlewares/errors-handler.js";

const app = express();

app
    .use(cors())
    .use(express.json())
    .get("/health", (_, res) => { res.send("Server is up!"); })
    .use("/clients", clientsRouter)
    .use(errorsHandler);

export function init() {
    connectDb();
    return Promise.resolve(app);
}

export async function close() {
    await disconnectDB();
}

export default app;
