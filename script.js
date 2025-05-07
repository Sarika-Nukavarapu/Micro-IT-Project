// CLOCK
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById("clock").innerText = time;
}
setInterval(updateClock, 1000);
updateClock();

// STOPWATCH
let stopwatchInterval;
let seconds = 0;

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateStopwatch() {
  document.getElementById("stopwatch").innerText = formatTime(seconds);
}

function startStopwatch() {
  if (stopwatchInterval) return;
  stopwatchInterval = setInterval(() => {
    seconds++;
    updateStopwatch();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  updateStopwatch();
}

// Initialize stopwatch display
updateStopwatch();
