document.addEventListener("DOMContentLoaded", function () {
  const recentList = document.getElementById("recentList");
  const games = document.getElementById("list");
  let items = games.getElementsByTagName("a");
  let thing = Array.from(items);
  let recents = localStorage.macvgRecents;
  if (recents) {
  let list = recents.split(",");
  let selectedGames = [];
  list.forEach((one) => {
    thing.forEach((game) => {
      let item = game.getAttribute("id");
      if (item === one) {
        const clonedGame = game.cloneNode(true);
        selectedGames.push(clonedGame);
        game.style.display = "flex";
      }
    });
  });
  selectedGames.forEach((element) => {
    element.setAttribute("name", element.innerHTML);
    element.style.paddingBottom = "12px";
    recentList.appendChild(element);
  });
} else {
  recentList.innerHTML = "<div class='ftext'>Looks like you haven't played any games yet! Take some time to explore and play different games on <a href='/' style='color: black;'>StemGames</a> to discover your likings. Once you played a game, it will show up here at the Recent Tab so you can visit it again for quick access. Happy gaming!</div>";
}
});
