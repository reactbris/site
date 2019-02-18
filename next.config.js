const withCSS = require("@zeit/next-css");

const config = {
  ...withCSS(),
  distDir: "../.next"
};

module.exports = config;
