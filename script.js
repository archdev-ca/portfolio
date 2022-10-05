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
    if (e.target.nodeName) {
      let targetContainer = document.getElementById(e.target.dataset["target"]);
      for (let i = 0; i < nav.children.length; i++) {
        nav.children[i].classList.remove("active");
      }
      e.target.parentNode.classList.add("active");
      for (let i = 0; i < targetContainer.parentNode.children.length; i++) {
        targetContainer.parentNode.children[i].classList.add("hidden");
      }
      targetContainer.classList.remove("hidden");
    }
  };
}
