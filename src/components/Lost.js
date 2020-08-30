////////// DEPENDENCIES //////////
import React from 'react';
import { Link } from 'react-router-dom';

////////// COMPONENT //////////
export default function Lost(props) {
  return (<>
    <main id="lost">
      <section id="section-lost">
        <div className="lost-main">
          <div className="lost-box">
            <h1 className="lost-head">404</h1>
            <p className="lost-body">The page you are looking for does&nbsp;not&nbsp;exist! <Link to="/">Click&nbsp;here</Link>&nbsp;to&nbsp;return&nbsp;home.</p>
          </div>
        </div>
      </section>
    </main>
  </>)
}