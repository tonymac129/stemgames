document.addEventListener("DOMContentLoaded", function () {
  /*
  let thing87638 = setInterval(() => {
    let theme = localStorage.getItem("theme");
    console.log(theme);
  if (theme === "light") {
    const root = document.documentElement;
    root.style.setProperty("--text-color", "black");
    root.style.setProperty("--shadow-color", "0px 0px 5px rgb(84, 84, 84)");
    root.style.setProperty("--black-color", "rgb(235, 235, 235)");
    root.style.setProperty("--bg-color", "rgb(235, 235, 235)");
    root.style.setProperty("--bg-color-2", "rgb(30, 30, 30)");
    root.style.setProperty("--group-bg-color", "rgb(140, 140, 140, 0.7)");
  } else {
    const root = document.documentElement;
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--shadow-color", "transparent");
    root.style.setProperty("--black-color", "black");
    root.style.setProperty("--bg-color", "rgb(50, 50, 50)");
    root.style.setProperty("--bg-color-2", "white");
    root.style.setProperty("--group-bg-color", "rgba(40, 40, 40, 0.7)");
  }
  }, 100);
  */
  const games = document.querySelectorAll(".game");
  games.forEach(function (game) {
    game.addEventListener("mouseover", function () {
      let innerThing = game.innerHTML;
      game.setAttribute("name", innerThing);
    });
  });
});

function gotIt() {
  const tip = document.querySelector(".tip");
  tip.style.display = "none";
  localStorage.setItem("cccse", "yes");
}
function search() {
  let searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
  const sList = document.getElementById("searchList");
  sList.innerHTML = "";
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  const games = document.getElementById("main");
  let items = games.getElementsByTagName("a");
  let clonedElements = [];
  if (searchTerm === '') {
    return;
  }

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var itemText = item.innerHTML.toLowerCase();

    if (itemText.includes(searchTerm)) {
      const clonedGame = item.cloneNode(true);
      clonedElements.push(clonedGame);
      sList.appendChild(clonedGame);
    }
  }
  if (sList.innerHTML === "") {
    sList.innerHTML = "Oops, we don't have that game yet. Submit a game request<pre> </pre> <a href='https://forms.gle/B3ed9Qj9EChpjemZ7' style='color: black' target='blank'>here</a>!"
  }
}

