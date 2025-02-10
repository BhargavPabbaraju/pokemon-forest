const ONE_HOUR = 60 * 60 * 60;

function formatMMSS(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function formatHHMMSS(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export function formatTime(seconds) {
  if (seconds <= ONE_HOUR) {
    return formatMMSS(seconds);
  }
  return formatHHMMSS(seconds);
}
