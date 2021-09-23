let theme = localStorage.getItem("theme");

if (theme === null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";
  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }

  localStorage.setItem("theme", mode);
}

let smoothScrollAnchor = document.querySelectorAll("a[href^='#']");

for (let i = 0; i < smoothScrollAnchor.length; i++) {
  const el = smoothScrollAnchor[i];

  el.addEventListener("click", function (e) {
    e.preventDefault();
    if (document.getElementById(this.getAttribute("href").replace("#", ""))) {
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
}
