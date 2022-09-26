let colors = document.querySelectorAll('.color');

function unselectAll() {
    for (let i = 0; i < colors.length; i++) {
        colors[i].style.border = "";
    }
}


colors.forEach(color => {
    color.addEventListener('click', function() {
        unselectAll();
        this.style.border = "solid black 1px";
    });
});