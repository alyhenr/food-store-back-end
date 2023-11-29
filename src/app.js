import "express-async-errors";
import express from "express";

import cors from "cors";

import { connectDb, disconnectDB } from "./config/database.js";

import { additionalsRouter, categoriesRouter, clientsRouter, ordersRouter, productsRouter } from "./routers/index.js";
import errorsHandler from "./middlewares/errors-handler.js";

const app = express();

app
    .use(cors())
    .use(express.json())
    .get("/health", (_, res) => { res.send("Server is up!") })
    .post("/health", (req, res) => {
        console.log(req.files);
        if (req.body) res.send(req.body);
        else res.send({});
    })
    .use("/clients", clientsRouter)
    .use("/products", productsRouter)
    .use("/categories", categoriesRouter)
    .use("/orders", ordersRouter)
    .use("/additionals", additionalsRouter)
    .use(errorsHandler);

export function init() {
    connectDb();
    return Promise.resolve(app);
}

export async function close() {
    await disconnectDB();
}

export default app;
