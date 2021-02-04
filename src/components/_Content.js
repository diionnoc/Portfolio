import React from "react";

//////////////////////// COMPONENT ////////////////////////
export default function Content(props) {
  return (
    <main id="content">
      <div className="container">{props.children}</div>
    </main>
  );
}
