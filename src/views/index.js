import "../variables.css";
import "./index.css";
import berryPotImg from "../../assets/berry_pot_empty.png";
import { formatTime } from "../utils";

function renderTop() {
  const top = document.createElement("div");
  const status = document.createElement("div");
  status.innerText = window.gameState.status;
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
  tree.src = window.gameState.berry.images[0];
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
  tag.innerText = window.gameState.tag;

  middle.appendChild(berry);
  middle.appendChild(tag);

  return middle;
}

function renderBottom() {
  const div = document.createElement("div");
  div.classList.add("main-bottom");

  const time = document.createElement("div");
  time.innerText = formatTime(window.gameState.time);
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
  timer.innerText = formatTime(window.gameState.time);
}

function startTimer() {
  let intervalId = setInterval(() => {
    if (window.gameState.time > 0) {
      window.gameState.time -= 1;
    } else {
      clearInterval(intervalId);
      window.gameState.time = window.gameState.default_time;
    }
    refreshTime();
  }, 1000);
}
