import "./styles.css";
import { renderInitialContent } from "./views";

import { trees } from "./models/tree";

const DEFAULT_TAG = "Study";
const DEFAULT_STATUS = "Plant a berry";
const DEFAULT_TIME = 0.5 * 60; // 10 minutes → 600 seconds
const BERRY = trees[Math.floor(Math.random() * trees.length)];
const BERRY_CYCLES = 3;

class GameStateBerry {
  constructor(tree, state) {
    this.tree = tree;
    this.state = state;
  }
}
Object.assign(GameStateBerry.prototype, {
  fullImage() {
    return this.tree.images[BERRY_CYCLES - 1];
  },
  currentImage() {
    const index =
      Math.floor(
        ((this.state.totalTime - this.state.currentTime) /
          this.state.totalTime) *
          BERRY_CYCLES,
      ) % BERRY_CYCLES;

    if (index == 0) {
      return null;
    }
    return this.tree.images[index - 1];
  },
  refreshBerry() {
    this.tree = trees[Math.floor(Math.random() * trees.length)];
  },
});

class GameState {
  constructor() {
    this.tag = DEFAULT_TAG;
    this.status = DEFAULT_STATUS;
    this.totalTime = DEFAULT_TIME;
    this.currentTime = DEFAULT_TIME;
    this.berry = new GameStateBerry(BERRY, this);
  }
}
window.gameState = new GameState();

renderInitialContent();
