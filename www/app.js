import { Server } from "http";
import express from "express";
import configureExpress from "./config/express";

const app = express();
const httpServer = new Server(app);

configureExpress(app);

app.get("/", (req, res) => {
    res.render("default");
});

export default httpServer;
