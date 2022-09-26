let colors = document.querySelectorAll('.color');


console.log(colors);

let i;

function unselectAll() {
    for (i = 0; i < colors.length; i++) {
        colors[i].style.backgroundColor = "";
    }
}


colors.forEach(color => {
    color.addEventListener('click', function() {
        unselectAll();
        this.style.backgroundColor = "black";
    });
});