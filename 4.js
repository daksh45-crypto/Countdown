const targetDate = new Date(2026, 2, 4, 23, 0, 0).getTime();

const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((diff / 1000) % 60));

  d.textContent = String(days).padStart(2, "0");
  h.textContent = String(hours).padStart(2, "0");
  m.textContent = String(minutes).padStart(2, "0");
  s.textContent = String(seconds).padStart(2, "0");
}


function updateThemeByTime() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 0 && hour < 7) {
    document.body.classList.add("night");
    document.body.classList.remove("day");
  } else {
    document.body.classList.add("day");
    document.body.classList.remove("night");
  }
}

updateCountdown();
updateThemeByTime();

setInterval(updateCountdown, 1000);
setInterval(updateThemeByTime, 60000);
