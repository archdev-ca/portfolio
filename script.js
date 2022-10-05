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
      let targetContainer = e.target.dataset["target"];
      for (let i = 0; i < nav.children.length; i++) {
        nav.children[i].classList.remove("active");
      }
      e.target.parentNode.classList.add("active");
    }
  };
}
