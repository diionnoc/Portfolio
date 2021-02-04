import React from "react";
import { Link } from "react-router-dom";
import { Global } from "Global";

//////////////////////// COMPONENT ////////////////////////
export default function Error(props) {
  const { handlePage } = React.useContext(Global);

  React.useEffect(() => {
    handlePage(`404`);
  }, []);

  return (
    <section id="error">
      <div className="error-main">
        <div className="error-box">
          <h1 className="error-head">404</h1>
          <p className="error-body">
            The page you are looking for does&nbsp;not&nbsp;exist! <Link to="/">Click&nbsp;here</Link>&nbsp;to&nbsp;return&nbsp;home.
          </p>
        </div>
      </div>
      <br />
    </section>
  );
}
