// -------------------------------- DEPENDENCIES -------------------------------- //

import React from "react";
import { Global } from "providers/Global";

import res_png from "../static/images/resume/chelsea_diionno_resume.png";
import res_pdf from "../static/images/resume/chelsea_diionno_resume.pdf";

// -------------------------------- COMPONENT -------------------------------- //

export default function Resume(props) {
  const { handlePage } = React.useContext(Global);

  React.useEffect(() => {
    handlePage(`resume`);
  }, []);

  return (
    <section id="resume">
      <div className="resume-jpg">
        <a href={res_pdf} target="_blank" rel="noopener noreferrer">
          <div className="image-box">
            <img src={res_png} loading="lazy" alt="Resume" title="Resume" />
          </div>
        </a>
      </div>
      <div className="resume-btn">
        <a href={res_pdf} target="_blank" rel="noopener noreferrer">
          <div className="resume-btn-shape">
            <h4>VIEW&nbsp;PDF</h4>
          </div>
        </a>
      </div>
    </section>
  );
}
