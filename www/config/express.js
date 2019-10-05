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
    const webpackConfig = isDev ? require("../webpack.config.dev").default : require("../webpack.config.prod").default;
    if (isDev) {
        const webpack = require("webpack");
        const compiler = webpack(webpackConfig);
        app.use(require("webpack-dev-middleware")(compiler, {
            noInfo: false,
            publicPath: webpackConfig.output.publicPath
        }));
        app.use(require("webpack-hot-middleware")(compiler));
    } else {
        console.log(webpackConfig.output.path);
        app.use(express.static(webpackConfig.output.path));
    }
}
