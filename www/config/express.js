import express from "express";
import path from "path";
import compression from "compression";

export default function (app) {
    const isDev = app.get("env") === "development";
    app.set('views', path.join(__dirname, '../../views'));
    app.set("view engine", "ejs");
    app.use(compression({
        filter: (req, res) => {
            if (req.headers["x-no-compression"]) {
                return false;
            }
            return compression.filter(req, res);
        }
    }));
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());

    app.use(express.static(path.resolve(__dirname, "../..", "public")));
}
