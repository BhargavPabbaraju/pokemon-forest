const imagePaths = require.context(
  "../../assets/trees/",
  true,
  /\.(png|jpe?g|svg)$/,
);

const BERRIES = ["Cheri", "Chesto", "Pecha"];

function loadImages(berry) {
  const name = berry[0].toLowerCase() + berry.substring(1);
  return imagePaths
    .keys()
    .filter((path) => path.includes(`/${name}/`)) // Ensure it's from the right folder
    .map(imagePaths);
}

class Tree {
  constructor(name, images) {
    this.name = name;
    this.images = images;
  }
}

export const trees = BERRIES.map((berry) => new Tree(berry, loadImages(berry)));
