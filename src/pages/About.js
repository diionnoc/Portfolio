// -------------------------------- DEPENDENCIES -------------------------------- //

import React from "react";
import { Global } from "providers/Global";

// -------------------------------- COMPONENT -------------------------------- //

export default function About(props) {
  const { handlePage } = React.useContext(Global);

  React.useEffect(() => {
    handlePage(`about`);
  }, []);

  return (
    <section id="about">
      <div className="about">
        <p className="about-body-bold">How do you pronounce my last name? </p>
        <p className="about-body-italic">
          die{`-\u2060`}oh{`-\u2060`}no
        </p>
        <br />
        <br />
        <p className="about-body">
          Hello, my name is Chelsea and I am an artist from Lincoln University, PA! I graduated from Longwood University in 2017
          with a degree in Graphic and Animation Design. I am currently working as a freelance artist, actively searching for a
          career in the animation industry as a character designer or visual development&nbsp;artist!
        </p>
        <br />
        <br />
        <p className="about-body">
          Thank you for taking the time to check out my work, and I look forward to possibly working with you in the future.
          Please reach out to my at my email{" "}
          <a className="about-body-link" href="mailto:diionnoc@gmail.com" target="_blank" rel="noopener noreferrer">
            diionnoc@gmail.com
          </a>
          !
        </p>
      </div>
    </section>
  );
}
