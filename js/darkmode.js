document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkToggle");
  const body = document.body;

  // 1. Check if user previously chose dark mode
  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark");
  }

  // 2. Listen for clicks
  if (toggle) {
    toggle.addEventListener("click", function () {
      body.classList.toggle("dark");

      // 3. Save preference to Local Storage
      if (body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "enabled");
      } else {
        localStorage.setItem("darkMode", "disabled");
      }
    });
  }
});