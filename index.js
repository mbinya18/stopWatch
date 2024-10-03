const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const stopwatchDisplay = document.getElementById('stopwatch');

let isRunning = false;
let intervalId = null;
let elapsedSeconds = 0;

function formatTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function updateStopwatch() {
    elapsedSeconds++;
    stopwatchDisplay.textContent = formatTime(elapsedSeconds);
}

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(intervalId);  // Stop the interval
        startStopButton.textContent = "Start";
        console.log("Stopping...");
    } else {
        intervalId = setInterval(updateStopwatch, 1000);  // Start the interval
        startStopButton.textContent = "Stop";
        console.log("Starting...");
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);  // Clear the interval if it's running
    elapsedSeconds = 0;
    stopwatchDisplay.textContent = "00:00:00";
    startStopButton.textContent = "Start";
    isRunning = false;
    console.log("Resetting...");
});
