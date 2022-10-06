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
    e.preventDefault();

    if (e.target.nodeName === "A") {
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
