const withCSS = require("@zeit/next-css");

const config = withCSS();

if (process.env.NOW_REGION) {
  config.target = "serverless";
}

module.exports = config;
