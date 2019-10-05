import webpack from "webpack";
import { resolve } from "path";

export default {
    mode: "production",
    entry: {
        "default": resolve(__dirname, "src/index.js")
    },
    target: "web",
    output: {
        path: resolve(__dirname, "public/js"),
        publicPath: "/",
        filename: "[name].bundle.js"
    },
    optimization: {
        minimize: true
    },
    plugin: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    module: {
        rules: [
            { test: /\.js$/, use: ["babel-loader"] },
            {
                test: /\.css$/, use: ["style-loader", "css-loader"]
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader" }
        ]
    }
};