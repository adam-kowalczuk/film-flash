(function() {
  const clockElement = document.getElementById("clock");

  const updateClock = function(clock) {
    clock.innerHTML = new Date().toLocaleTimeString([], {
      hour12: false
    });
  };

  setInterval(function() {
    updateClock(clockElement);
  }, 1000);
})();
