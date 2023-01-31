const welcomeEl = document.getElementById("welcome-el");

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(welcome) {
  welcomeEl.textContent = `${welcome}, Per Harald Borgen 👋`;
}

greetUser("Howdy yo");
