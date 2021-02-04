import React from "react";
import { Global } from "@utils/Global";
import { Modal } from "@utils/Modal";

import fs from "fs";
import path from "path";
import sizeOf from "image-size";

import { checkOdd } from "@utils/tools";

import Image from "next/image";

const dir = `/static/images/characterDesign`;

//////////////////////// COMPONENT ////////////////////////
export default function CharacterDesign(props) {
  const { log, handlePage } = React.useContext(Global);
  const { setImages, setSelectedImage } = React.useContext(Modal);

  React.useEffect(() => {
    handlePage(`character-design`);
  }, []);

  const { images } = props;
  const imageSources = images?.map((image) => image.src);
  // log(`CHARACTER DESIGN IMAGES:`, images);

  const oddImages = images.filter((image) => image.isOdd);
  const evenImages = images.filter((image) => !image.isOdd);

  const onImageClick = (src) => (e) => {
    log(src);
    setImages(imageSources);
    setSelectedImage(src);
    document.body.classList.add("modal-open");
  };

  return (
    <section id="character">
      <div className="columns">
        <div className="column">
          {oddImages.map((image, i) => (
            <div key={image?.name} className="image-box">
              <Image
                src={image?.src}
                alt={image?.name}
                width={image?.size?.width}
                height={image?.size?.height}
                layout="responsive"
                quality={5}
                onClick={onImageClick(image?.src)}
              />
            </div>
          ))}
        </div>
        <div className="column-break" />
        <div className="column">
          {evenImages.map((image, i) => (
            <div key={image?.name} className="image-box">
              <Image
                src={image?.src}
                alt={image?.name}
                width={image?.size?.width}
                height={image?.size?.height}
                layout="responsive"
                quality={5}
                onClick={onImageClick(image?.src)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps({ req, res }) {
  const folderDir = path.join(process.cwd(), `/public${dir}`);
  const fileNames = fs.readdirSync(folderDir);

  const images = fileNames.map((name, i) => {
    const fileDir = path.join(process.cwd(), `/public${dir}/${name}`);
    let size = sizeOf(fileDir);
    if (size?.orientation === 6 || size?.orientation === 8 || size?.orientation === 5 || size?.orientation === 7) {
      let newSize = {
        width: size?.height,
        height: size?.width,
        orientation: 1,
        type: size?.type,
      };
      size = newSize;
    }
    const src = `${dir}/${name}`;
    const num = parseInt(name.split(`_`)[1].split(`.`)[0]) || null;
    const isOdd = checkOdd(num);
    return { name, src, size, isOdd };
  });

  return { props: { images } };
}
