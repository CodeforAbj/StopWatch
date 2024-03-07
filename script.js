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

// --- function to start the stopwatch --- //
function startWatch() {
  if (!isRunning) {
    isRunning = true;
    clearRef = setInterval(updateTimer, 10); //  storing reference to stop later  //
  }
}
// --- function to update display timer -- //
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
    timerDisplay.innerHTML = `${timerHour
      .toString()
      .padStart(2, "0")}:${timerMinutes
      .toString()
      .padStart(2, "0")}:${timerSeconds.toString().padStart(2, "0")}:${(
      timerMS / 10
    )
      .toFixed(0)
      .toString()
      .padStart(2, "0")}`;
  }
}
// - function to stop or pause the timer - //
function stopWatch() {
  isRunning = false;
  clearInterval(clearRef);
}

//  function to reset the stopWatch to zero  //
function resetWatch() {
  if (clearRef !== "") {
    clearInterval(clearRef);
  }
  timerMS = 0;
  timerSeconds = 0;
  timerMinutes = 0;
  timerHour = 0;
  timerDisplay.innerHTML = "00:00:00:00";
  clearRef = "";
  isRunning = false;
}
