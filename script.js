// Create variables for all elements with color and image-selection class
let colors = document.querySelectorAll('.color');
let images = document.querySelectorAll('.image-selection');

// Function to unselect the elements when an element is clicked
function unselectAll(cls) {
    for (let i = 0; i < cls.length; i++) {
        cls[i].style.border = "";
    }
}

// Adds an event listener to each color element
colors.forEach(color => {
    color.addEventListener('click', function() {
        unselectAll(colors);
        this.style.border = "solid black 1px";
    });
});

images.forEach(image => {
    image.addEventListener('click', function() {
        unselectAll(images);
        this.style.border = 'solid black 1px';
    })
})

