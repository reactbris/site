import React from "react";
import Head from "next/head";
import { colors } from "src/utils/theme";

export default ({ children }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content={colors.redLight} />

    <title>ReactBris - Hi!</title>

    <link rel="stylesheet" href="/static/reset.css" />
    <link rel="stylesheet" href="/static/styles.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Space+Mono:400,700"
      rel="stylesheet"
    />
    <link
      id="favicon"
      rel="icon"
      type="image/x-icon"
      href="/static/favicon.ico"
    />
    {children}
  </Head>
);
