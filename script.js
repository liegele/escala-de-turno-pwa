/* // When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var gridContainer = document.querySelector('.grid-container-header');
// Get the offset position of the navbar
var sticky = gridContainer.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    gridContainer.classList.add('grid-container-header');
    gridContainer.classList.remove('grid-container');
  } else {
    gridContainer.classList.add('grid-container');
    gridContainer.classList.remove('grid-container-header');
  }
}
 */
