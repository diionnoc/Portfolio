// Dynamically import files
function importAll(r) {
  let items = {};
  r.keys().map((item, i) => {
    items[item.replace("./", "")] = r(item);
  });
  return items;
}

// Create images array
export function importImages(page) {
  let imageModules = {};

  if (page === `characterDesign`) imageModules = importAll(require.context(`../static/images/characterDesign`, false, /\.(png|jpe?g|svg)$/));
  if (page === `conceptArt`) imageModules = importAll(require.context(`../static/images/conceptArt`, false, /\.(png|jpe?g|svg)$/));
  if (page === `design`) imageModules = importAll(require.context(`../static/images/design`, false, /\.(png|jpe?g|svg)$/));
  if (page === `illustration`) imageModules = importAll(require.context(`../static/images/illustration`, false, /\.(png|jpe?g|svg)$/));
  if (page === `photography`) imageModules = importAll(require.context(`../static/images/photography`, false, /\.(png|jpe?g|svg)$/));

  const imageKeys = Object.keys(imageModules);
  const imageValues = Object.values(imageModules);

  let images = [];

  for (let i = 0; i < imageKeys.length; i++) {
    if (!imageKeys[i].includes(`images/`)) {
      const img = {};

      img.name = imageKeys[i].split(`.`)[0];
      img.src = imageValues[i];
      img.num = parseInt(imageKeys[i].split(`_`)[1].split(`.`)[0]) || null;
      img.isOdd = img.num % 2 ? true : false;

      images.push({
        name: img.name,
        src: img.src,
        num: img.num,
        isOdd: img.isOdd,
      });
    }
  }

  return images;
}
