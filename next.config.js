const withCSS = require("@zeit/next-css");

const config = withCSS();

console.log(JSON.stringify(process.env, null, 2));

if (process.env.NODE_ENV === "production") {
  config.target = "serverless";
}

module.exports = config;
