// Create variable for all elements with color class
let colors = document.querySelectorAll('.color');

// Function to unselect the elements when an element is clicked
function unselectAll() {
    for (let i = 0; i < colors.length; i++) {
        colors[i].style.border = "";
    }
}

// Adds an event listener to each color element
colors.forEach(color => {
    color.addEventListener('click', function() {
        unselectAll();
        this.style.border = "solid black 1px";
    });
});