import "../variables.css";
import "./index.css";
import berryPotEmptyImg from "../../assets/berry_pot_empty.png";
import berryPotImg from "../../assets/berry_pot.png";
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
  berry.src = berryPotEmptyImg;
  berry.setAttribute("id", "main-berry-pot");

  const tree = document.createElement("img");
  tree.setAttribute("id", "main-tree");
  tree.style.visibility = "hidden";

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
  time.innerText = formatTime(window.gameState.totalTime);
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
  timer.innerText = formatTime(window.gameState.currentTime);
  const tree = document.getElementById("main-tree");
  const img = window.gameState.berry.currentImage();
  if (img) {
    tree.src = img;
    tree.style.visibility = "visible";
  }
}

function clearTime() {
  window.gameState.currentTime = window.gameState.totalTime;
  const tree = document.getElementById("main-tree");
  tree.src = window.gameState.berry.fullImage();
}

function startTimer() {
  window.gameState.berry.refreshBerry();
  const berryPot = document.getElementById("main-berry-pot");
  berryPot.src = berryPotImg;
  const tree = document.getElementById("main-tree");
  tree.style.visibility = "hidden";

  let intervalId = setInterval(() => {
    if (window.gameState.currentTime > 0) {
      window.gameState.currentTime -= 1;
    } else {
      clearInterval(intervalId);
      clearTime();
    }
    refreshTime();
  }, 1000);
}
