function updateCalendar() {
  const now = new Date();

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit" };

  document.getElementById("date").textContent = now.toLocaleDateString(
    undefined,
    dateOptions
  );
  document.getElementById("time").textContent = now.toLocaleTimeString(
    undefined,
    timeOptions
  );
}

// Update every second
setInterval(updateCalendar, 1000);
updateCalendar(); // Initial call
