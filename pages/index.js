import React, { Component, Fragment } from "react";
import PageHead from "src/components/page-head";
import BrisLogos from "src/components/logo-bris";
import Hero from "src/components/hero";

class IndexPage extends Component {
  render() {
    return (
      <Fragment>
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
            <li>
              <a href="/conduct" title="Code of Conduct">
                📕 Code of Conduct
              </a>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default IndexPage;
