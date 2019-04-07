import React from "react";

export default function ContentPage({
  children,
  backToLink = "/",
  backToLabel = "Back to Home"
}) {
  return (
    <>
      {" "}
      <div className="skyline" />
      <div className="content-back-link">
        <a href={backToLink}>« {backToLabel}</a>
      </div>
      <main className="content">
        <div className="content-inner">{children}</div>
      </main>
    </>
  );
}
