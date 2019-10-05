import webpack from "webpack";
import { resolve } from "path";

export default {
    mode: "development",
    entry: {
        "default": resolve(__dirname, "src/index.js")
    },
    target: "web",
    output: {
        path: resolve(__dirname, "public/js"),
        publicPath: "/",
        filename: "[name].bundle.js"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules | bower_components)/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.css$/, use: ["style-loader", "css-loader"]
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader" }
        ]
    }
};