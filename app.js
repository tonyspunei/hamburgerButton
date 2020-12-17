(function () {
  let button = document.querySelector(".button");
  console.log(button);
  let menu = document.querySelector(".menu");

  button.addEventListener("click", showMenu);

  function showMenu() {
    if (menu.classList.contains("toggle")) {
      menu.classList.remove("toggle");
    } else {
      menu.classList.add("toggle");
    }
  }
})();
