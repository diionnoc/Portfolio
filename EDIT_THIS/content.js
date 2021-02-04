//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//
// Don't worry about this, but also don't touch it.
import moment from "moment";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdMail } from "react-icons/md";
//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//\//

// This is the data for the "Header" navigation at the top
export const header = {
  profile: `/images/profile.png`,
};

// This is the data for the "Footer" at the bottom
export const footer = {
  socials: [
    {
      active: true,
      name: `Email`,
      color: `#ffffff`,
      link: `mailto:diionnoc@gmail.com`,
      icon: <MdMail />,
    },
    {
      active: true,
      name: `LinkedIn`,
      color: `#ffffff`,
      link: `https://www.linkedin.com/in/chelseadiionno/`,
      icon: <FaLinkedinIn />,
    },
    {
      active: true,
      name: `Instagram`,
      color: `#ffffff`,
      link: `https://www.instagram.com/diionnoc/`,
      icon: <FaInstagram />,
    },
    {
      active: true,
      name: `YouTube`,
      color: `#ffffff`,
      link: `https://www.youtube.com/xoblivionx13/`,
      icon: <FaYoutube />,
    },
  ],
  copy: `©${moment().format(`YYYY`)}\xa0Chelsea\xa0DiIonno`,
};
