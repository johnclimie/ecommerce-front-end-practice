// Create variables for selected elements
let colors = document.querySelectorAll('.color');
let images = document.querySelectorAll('.selected-img');
let sizes = document.querySelectorAll('.size');
let productImg = document.querySelectorAll('#product-img');

// Function to unselect the elements when an element is clicked
function unselectAll(cls) {
    for (let i = 0; i < cls.length; i++) {
        cls[i].style.border = "";
        cls[i].style.background = "";
        cls[i].style.color = "";
    }
}

// Adds an event listener to each color element
colors.forEach(color => {
    color.addEventListener('click', function() {
        unselectAll(colors);
        this.style.border = "solid black 1px";
    });
});

// Adds an event listener to each image selection
images.forEach(image => {
    image.addEventListener('click', function() {
        unselectAll(images);
        this.style.border = 'solid black 1px';

        productImg[0].src = this.dataset.img;
    })
})

// Adds an event listener for avalible sizes
sizes.forEach(size => {
    size.addEventListener('click', function() {
        unselectAll(sizes);
        this.style.border = 'solid black 1px';
        this.style.background = 'var(--black)';
        this.style.color = 'var(--off-white)';
    })
})