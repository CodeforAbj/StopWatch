// ------------- Declarations ------------ //
let timerMS = 0;
let timerSeconds = 0;
let timerMinutes = 0;
let timerHour = 0;
timerDisplay = document.getElementById("timer");

let isRunning = false;
let clearRef = "";

// ====================================================== //
// ===================== main Logic ===================== //
// ====================================================== //

function startWatch() {
  isRunning = true;
  clearRef = setInterval(updateTimer, 10);
}
function updateTimer() {
  if (isRunning) {
    timerMS += 10;
    if (timerMS >= 1000) {
      timerMS = 0;
      timerSeconds += 1;
      if (timerSeconds >= 60) {
        timerSeconds = 0;
        timerMinutes += 1;
        if (timerMinutes >= 60) {
          timerMinutes = 0;
          timerHour += 1;
        }
      }
    }
    // ------------- render timer ------------- //
    timerDisplay.innerHTML = `${timerHour}:${timerMinutes}:${timerSeconds}:${
      timerMS / 10
    }`;
  }
}
function stopWatch() {
  isRunning = false;
  clearInterval(clearRef);
}
function resetWatch() {
  if (clearRef !== "") {
    clearInterval(clearRef);
  }
  timerMS = 0;
  timerSeconds = 0;
  timerMinutes = 0;
  timerHour = 0;
  timerDisplay.innerHTML = "00:00:00";
  clearRef = "";
}
