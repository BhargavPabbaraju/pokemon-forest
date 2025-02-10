import "./index.css";
import berryPotImg from "../../assets/berry_pot.png";
import treeImg from "../../assets/tree2.apng";

const DEFAULT_TAG = "Study";
const DEFAULT_STATUS = "Plant a berry";

function renderTop() {
  const top = document.createElement("div");
  const status = document.createElement("div");
  status.innerText = DEFAULT_STATUS;
  top.classList.add("main-top");

  top.appendChild(status);

  return top;
}

function renderBerryPot() {
  const div = document.createElement("div");

  const berry = document.createElement("img");
  berry.src = berryPotImg;
  berry.classList.add("main-berry");

  const tree = document.createElement("img");
  tree.src = treeImg;
  tree.setAttribute("id", "tree");
  tree.classList.add("main-tree");

  div.appendChild(berry);
  div.appendChild(tree);

  return div;
}

function renderMiddle() {
  const middle = document.createElement("div");
  const berry = document.createElement("div");
  middle.classList.add("main-middle");

  berry.appendChild(renderBerryPot());

  const tag = document.createElement("div");
  tag.innerText = DEFAULT_TAG;

  middle.appendChild(berry);
  middle.appendChild(tag);

  return middle;
}

function renderBottom() {
  const div = document.createElement("div");
  div.classList.add("main-bottom");

  const time = document.createElement("div");
  time.classList.add("main-timer");

  div.appendChild(time);

  return div;
}

export function renderInitialContent() {
  const content = document.getElementById("content");
  content.replaceChildren();

  content.appendChild(renderTop());
  content.appendChild(renderMiddle());
  content.appendChild(renderBottom());
}
