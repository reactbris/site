const path = require("path");
const withCSS = require("@zeit/next-css");

const config = withCSS({
  webpack: config => {
    if (!config.resolve) config.resolve = {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      src: path.resolve(__dirname, "./src")
    };
    return config;
  }
});

if (process.env._LOCAL !== "true") {
  config.target = "serverless";
}

module.exports = config;
