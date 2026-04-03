function toggleMode() {
  const html = document.documentElement

  //if (hmtl.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  // }

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Light Mode.png")
  } else {
    img.setAttribute("src", "./assets/Dark Mode.png")
  }
}
