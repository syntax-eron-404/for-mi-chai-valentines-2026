function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "mi chai" && pass === "balut") {
    sessionStorage.setItem("auth", "true");
    window.location.replace("home.html");
  } else {
    document.getElementById("error").innerText =
      "bBy quOh lg mkkpSok.. hu u???";
  }
}

