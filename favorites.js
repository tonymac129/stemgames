document.addEventListener("DOMContentLoaded", function () {
  
  const favoriteList = document.getElementById("favoriteList");
  
  const games = document.getElementById("list");
  let items = games.getElementsByTagName("a");
  let thing = Array.from(items);
  let favorites = localStorage.favorites;
  if (favorites) {
  let list = favorites.split(",");
  let clonedElements = [];
  console.log(list);
  if (list != "bruh") {
  list.forEach((one) => {
    thing.forEach((game) => {
      let item = game.getAttribute("id");
      if (item === one) {
        const clonedGame = game.cloneNode(true);
        clonedElements.push(clonedGame);
        game.style.display = "flex";
      }
    });
  });
  clonedElements.sort((a, b) => {
    let idA = a.getAttribute("id");
    let idB = b.getAttribute("id");
    return idA.localeCompare(idB);
  });
  clonedElements.forEach((element) => {
    element.setAttribute("name", element.innerHTML);
    element.style.paddingBottom = "12px";
    favoriteList.appendChild(element);
  });
  } else {
    favoriteList.innerHTML = "<div class='ftext'>Looks like you haven't favorited any games yet! Take some time to explore and play different games on <a href='/' style='color: black;'>StemGames</a> to discover your likings. Once you find games that you like, click on the star icon, and they will be pinned here for quick access. Happy gaming!</div>";
  } } else {
    favoriteList.innerHTML = "<div class='ftext'>Looks like you haven't favorited any games yet! Take some time to explore and play different games on <a href='/' style='color: black;'>StemGames</a> to discover your likings. Once you find games that you like, click on the star icon, and they will be pinned here for quick access. Happy gaming!</div>";
  }
});
