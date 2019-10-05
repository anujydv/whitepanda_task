import webpack from "webpack";
import webpackConfig from "../webpack.config.dev";

console.log("Compiling minified bundles...");

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error));
  }

  if (jsonStats.hasWarning) {
    console.log(colors.yellow.bold("Webpack generated the following warnings: "));
    jsonStats.warnings.map(warning => console.log(warning));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log("App has been compiled in production mode and output to /bin");

  return 0;
});
