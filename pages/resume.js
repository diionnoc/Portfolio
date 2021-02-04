import React from "react";
import { Global } from "@utils/Global";

import fs from "fs";
import path from "path";
import sizeOf from "image-size";

import Image from "next/image";

const dir = `/static/images/resume`;

//////////////////////// COMPONENT ////////////////////////
export default function Resume(props) {
  const { handlePage } = React.useContext(Global);

  React.useEffect(() => {
    handlePage(`resume`);
  }, []);

  const { jpg, pdf } = props;

  return (
    <section id="resume">
      <div className="resume-jpg">
        <a href={pdf} target="_blank" rel="noopener noreferrer">
          <div className="image-box">
            <Image src={jpg?.src} alt={jpg?.name} width={jpg?.size?.width} height={jpg?.size?.height} layout="responsive" quality={100} />
          </div>
        </a>
      </div>
      <div className="resume-btn">
        <a href={pdf} target="_blank" rel="noopener noreferrer">
          <div className="resume-btn-shape">
            <h4>VIEW&nbsp;PDF</h4>
          </div>
        </a>
      </div>
    </section>
  );
}

export async function getStaticProps({ req, res }) {
  const folderDir = path.join(process.cwd(), `/public${dir}`);
  const fileNames = fs.readdirSync(folderDir);

  const jpgName = fileNames?.filter((name) => name.includes(`.jpg`))[0];
  const pdfName = fileNames?.filter((name) => name.includes(`.pdf`))[0];

  const jpgFileDir = path.join(process.cwd(), `/public${dir}/${jpgName}`);

  const jpg = {
    name: jpgName,
    src: `${dir}/${jpgName}`,
    size: sizeOf(jpgFileDir),
  };

  const pdf = `${dir}/${pdfName}`;

  return { props: { jpg, pdf } };
}
