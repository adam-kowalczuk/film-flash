(function() {
  const clockElement = document.getElementById("clock");

  const updateClock = function(clock) {
    const currentTime = new Date().toLocaleTimeString([], {
      hour12: false
    });
    clock.innerHTML = currentTime;

    // Schedule the next update to occur after 1 second
    setTimeout(function() {
      updateClock(clock);
    }, 1000);
  };

  // Start the initial update immediately
  updateClock(clockElement);
})();
