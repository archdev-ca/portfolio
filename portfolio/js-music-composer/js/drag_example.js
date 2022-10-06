// JavaScript goes here.
var resultsbox;
var goodbox;
var badbox;
var goodboxcolor;
var badboxcolor;

window.onload = function () {
  resultsbox = document.getElementById("results");
  goodbox = document.getElementById("dragee");
  badbox = document.getElementById("nodrop");
  // get the original colours of these elements.
  goodboxcolor = window.getComputedStyle(goodbox).backgroundColor;
  badboxcolor = window.getComputedStyle(badbox).backgroundColor;
};

/* Steps to complete Drag and Drop:
    1. Enable "draggable" on the DIV with the draggable = "true" attribute.
    2. Detect that the "drag" has started. Call a function.
    3. Detect when the object is dragged OVER another object. 
    4. Need to allow the drop to happen. 
    5. Detect when the "dragger" is DROPPED on the "dragee".  
    6. Prevent the browser's default behavior for a "drop". 
    6.1: Need to erase the original object.
    6.2: Need to "move" the original DIV to a child of the "dragee" box. 
    7. Detect a "drop" on the "don't drop here" box. not allowed. 
    8. Detect the the user has STOPPED dragging. 
    9. Make all this work for touchscreen
*/

function dragIt(evt) {
  resultsbox.innerHTML =
    "Draggin it! We are dragging: <strong>" + evt.target.id + "</strong>";

  // Need to get the data that represents our DIV as text (html). We do this
  // with a javascript function called "dataTransfer". We need to GET the "id"
  // of the element that triggered the drag event as well.
  evt.dataTransfer.setData("text", evt.target.id);
}

function draggedOverIt(evt, color) {
  resultsbox.innerHTML = "You're OVER: <strong>" + evt.target.id + "</strong>";
  // change the color of the box.
  evt.target.style.background = color;
  // Preventing the browser's default behavior when one object is dragged over
  // another object. Without this, the object will "snap" back to its original
  // position. We cannot detect a "drop" without this line of code.
  evt.preventDefault();
}

function dropIt(evt) {
  resultsbox.innerHTML =
    "Dropped it like it was hot! " + "You dropped it on " + evt.target.id;
  // Prevent the browser's default behavior.
  evt.preventDefault();
  // This will reference the data object that was set earlier when we started to
  // "drag". It will give us an object that we can use to "append" to another
  // element.
  var data = evt.dataTransfer.getData("text");
  // appendChild will take our object, and move it so that it is a child of the
  // target object ("dragee"). The dragged object will now appear to "stick" to
  // the target object, but really it's become a CHILD of the target.
  evt.target.appendChild(document.getElementById(data));
  // Our original CSS rule still applies. The box is now however, 70px from the
  // top of its PARENT and 20px from the left of its new parent. We can change
  // this with the JS .style property.
  document.getElementById(data).style.top = "4px";
  document.getElementById(data).style.left = "4px";
} // end of dropit function.

function changeBack(evt, box) {
  resultsbox.innerHTML = "Changed your mind, hey?";
  if (box == "goodbox") {
    evt.target.style.background = goodboxcolor;
  } else {
    evt.target.style.background = badboxcolor;
  }
}

function wrongDrop(evt) {
  resultsbox.innerHTML = "Sorry, <strong>wrong box!</strong>. Try again!";
  evt.target.style.background = badboxcolor;
}
