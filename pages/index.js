import React, { Component } from "react";
import Head from "next/head";
import LogoBris from "../components/logo-bris.svg";

const colors = {
  grey1: "#333333",
  grey2: "#4F4F4F",
  grey3: "#828282",
  grey4: "#BDBDBD",
  grey5: "#E0E0E0",
  grey6: "#F2F2F2",
  blue: "#1B58CE",
  blueLight: "#D8E3FB",
  blueDark: "#00153D",
  purple: "#C425C7",
  purpleLight: "#F5B4FF",
  purpleDark: "#59005B",
  red: "#E61C5D",
  redLight: "#FCBFD3",
  redDark: "#7E000F",
  yellow: "#FFE98A",
  yellowLight: "#FEFBEF",
  yellowDark: "#E7BB01"
};

class IndexPage extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content={colors.redLight} />

          <title>ReactBris - Hi!</title>

          <link rel="stylesheet" href="/static/reset.css" />
          <link rel="stylesheet" href="/static/styles.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Space+Mono:700"
            rel="stylesheet"
          />
          <link
            id="favicon"
            rel="icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
          <script>{`
          window.addEventListener('load', () => {
            document.body.classList.add("loaded");
          })
          `}</script>
        </Head>

        <div className="bgs">
          <div className="bg" />

          <div className="brand">
            <LogoBris />
            <LogoBris />
            <LogoBris />
            <LogoBris />
            <LogoBris />
            <LogoBris />
            <LogoBris />
            <LogoBris />
          </div>
        </div>

        <div className="footer">
          <ul>
            <li>
              <a href="https://github.com/reactbris/meetup">👋 Submit a Talk</a>
            </li>
            <li>
              <a href="https://www.meetup.com/reactbris">📅 Meetup Events</a>
            </li>
            <li>
              <a href="https://twitter.com/reactbris">🐦 Twitter</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default IndexPage;
