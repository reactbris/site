import React, { Fragment } from "react";

export default function ContentPage({
  children,
  backToLink = "/",
  backToLabel = "Back to Home"
}) {
  return (
    <Fragment>
      <nav className="content__back-link u_rel u_zhigh">
        <a href={backToLink}>« {backToLabel}</a>
      </nav>

      <main className="content u_rel u_zhigh">{children}</main>

      <div className="bgs">
        <div className="bg" />
      </div>
    </Fragment>
  );
}
