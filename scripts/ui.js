document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header")

  if (window.scrollY > 0 && !header.classList.contains("detached")) {
    header.classList.add("detached")
  }

  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY === 0) {
        if (header.classList.contains("detached")) {
          header.classList.remove("detached")
        }
      } else {
        if (!header.classList.contains("detached")) {
          header.classList.add("detached")
        }
      }
    },
    {
      passive: true,
    }
  )
})

function toggleMode() {
  document.body.classList.toggle("dark-mode")
  localStorage.setItem(
    "dark-mode",
    document.body.classList.contains("dark-mode")
  )
}

if (localStorage.getItem("dark-mode") === null) {
  const isDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  localStorage.setItem("dark-mode", isDark)
}

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode")
}
