let colors = document.querySelectorAll('.color');

let i;

function unselectAll() {
    for (i = 0; i < colors.length; i++) {
        colors[i].style.backgroundColor = "";
    }
}
