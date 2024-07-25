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
        <p className="about-body">
          Hi, thanks for stopping by my portfolio! My name is Chelsea DiIonno (pronounced{" "}
          <p className="about-body-italic">
            die{`-\u2060`}oh{`-\u2060`}no
          </p>
          ) and I am a freelance artist based in Fredericksburg, VA.
        </p>

        <br />
        <br />

        <p className="about-body">
          Visual development & environment design are my bread and butter, however I am also skilled in illustration, character
          design and graphic design. Basically, anything that requires quick, creative thinking I'm your artist! I believe in
          telling a story with my work that leaves an impression on a person through whimsy and humor.
        </p>

        <br />
        <br />

        <p className="about-body">
          When I'm not working, you can find me attempting to cook, taking care of my plethora of house plants or catching up on
          The Great British Baking Show.
        </p>

        <br />
        <br />

        <p className="about-body">
          Sound like something you're interested in? Shoot me an email at{" "}
          <a className="about-body-link" href="mailto:diionnoc@gmail.com" target="_blank" rel="noopener noreferrer">
            diionnoc@gmail.com
          </a>{" "}
          to talk about future plans together. I can't wait to work with you!
        </p>
      </div>
    </section>
  );
}
