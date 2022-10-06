let nav = document.getElementById("nav");
let toggle = document.getElementById("toggle");

window.addEventListener("click", handleClickOutside);
function handleClickOutside(e) {
  if (
    !nav.contains(e.target) &&
    e.target !== toggle &&
    !toggle.contains(e.target)
  ) {
    nav.classList.add("hidden");
  }
}

toggle.addEventListener("click", handleClickHamburger);
function handleClickHamburger(e) {
  e.preventDefault();
  nav.classList.toggle("hidden");
}

/**
 * Get all navs and attach click handler
 */
let navs = document.getElementsByClassName("nav");
for (let i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", createNavClickHandler(navs[i]));
}

/**
 * click navigation
 * @param {*} e
 */
function createNavClickHandler(nav) {
  return (e) => {
    if (e.target.nodeName === "A") {
      e.preventDefault();

      // get the target container
      let targetContainer = document.getElementById(e.target.dataset["target"]);

      // remove active class from all the nav children
      for (let i = 0; i < nav.children.length; i++) {
        nav.children[i].classList.remove("active");
      }

      // add active class to this nav's parent li
      e.target.parentNode.classList.add("active");

      // hide target container siblings
      for (let i = 0; i < targetContainer.parentNode.children.length; i++) {
        targetContainer.parentNode.children[i].classList.add("hidden");
      }
      targetContainer.classList.remove("hidden");
    }
  };
}
