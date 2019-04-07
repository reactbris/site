import React from "react";
import PageHead from "src/components/page-head";
import Hero from "src/components/hero";

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode, errorMessage: (err || {}).message };
  }

  render() {
    const { statusCode, errorMessage } = this.props;
    return (
      <>
        <PageHead />
        <div className="skyline" />
        <Hero>
          <div className="page-error">
            <h1>{statusCode || errorMessage}</h1>
            <p>
              An error occured.{" "}
              <a href="/" title="Go home">
                reactbris.org
              </a>
            </p>
          </div>
        </Hero>
      </>
    );
  }
}

export default Error;
