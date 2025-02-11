import "../variables.css";
import "./index.css";
import berryPotImg from "../../assets/berry_pot.png";
import treeImg from "../../assets/tree1.apng";
import { formatTime } from "../utils";

const DEFAULT_TAG = "Study";
const DEFAULT_STATUS = "Plant a berry";
const DEFAULT_TIME = 0.5 * 60; // 10 minutes → 600 seconds

const state = {
  tag: DEFAULT_TAG,
  status: DEFAULT_STATUS,
  time: DEFAULT_TIME,
};

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
  div.classList.add("berry-container");

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
  time.innerText = formatTime(DEFAULT_TIME);
  time.setAttribute("id", "main-timer");

  const plantButton = document.createElement("button");
  plantButton.setAttribute("id", "plant-button");
  plantButton.innerText = "Plant";
  plantButton.addEventListener("click", startTimer);

  div.appendChild(time);
  div.appendChild(plantButton);

  return div;
}

export function renderInitialContent() {
  const content = document.getElementById("content");
  content.replaceChildren();

  content.appendChild(renderTop());
  content.appendChild(renderMiddle());
  content.appendChild(renderBottom());
}

function refreshTime() {
  const timer = document.getElementById("main-timer");
  timer.innerText = formatTime(state.time);
}

function startTimer() {
  let intervalId = setInterval(() => {
    if (state.time > 0) {
      state.time -= 1;
    } else {
      clearInterval(intervalId);
      state.time = DEFAULT_TIME;
    }
    refreshTime();
  }, 1000);
}
