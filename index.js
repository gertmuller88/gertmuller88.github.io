function startTimer(duration, display) {
  var timer = duration, seconds;
  
  setInterval(function () {
    if(--timer<=0) {
      display.textContent = "";
    } else {
      display.textContent = " within " + timer + " seconds";
    }
  }, 1000);
}

window.onload = function () {
  display = document.querySelector('#time');
  startTimer(10, display);
};
