function startTimer(duration, display) {
  var timer = duration, seconds;
  
  setInterval(function () {
    display.textContent = timer;
    
    if(--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  display = document.querySelector('#time');
  startTimer(10, display);
};
