import "./styles.css";
import { renderInitialContent } from "./views";

import { trees } from "./models/tree";

const DEFAULT_TAG = "Study";
const DEFAULT_STATUS = "Plant a berry";
const DEFAULT_TIME = 0.5 * 60; // 10 minutes → 600 seconds
const BERRY = trees[0];

class GameState {
  constructor() {
    this.tag = DEFAULT_TAG;
    this.status = DEFAULT_STATUS;
    this.default_time = DEFAULT_TIME;
    this.time = DEFAULT_TIME;
    this.berry = BERRY;
  }
}
window.gameState = new GameState();

renderInitialContent();
