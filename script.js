function updateTime() {
  const timeElement = document.getElementById('time');
  timeElement.textContent = Date.now();
}

// Update every 1 second
setInterval(updateTime, 1000);

// Run immediately on load