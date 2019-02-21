import React, { Component } from "react";
import PageHead from "src/components/page-head";
import BrisLogos from "src/components/logo-bris";
import Hero from "src/components/hero";

class IndexPage extends Component {
  render() {
    return (
      <>
        <PageHead />

        <Hero>
          <BrisLogos />
        </Hero>

        <div className="footer">
          <ul>
            <li>
              <a
                href="https://github.com/reactbris/meetup"
                title="ReactBris GitHub Issues"
              >
                👋 Submit a Talk
              </a>
            </li>
            <li>
              <a
                href="https://www.meetup.com/reactbris"
                title="ReactBris Meetup.com Group"
              >
                📅 Meetup Events
              </a>
            </li>
            <li>
              <a href="https://twitter.com/reactbris" title="ReactBris Twitter">
                🐦 Twitter
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default IndexPage;
