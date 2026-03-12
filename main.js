var screen = document.querySelector(".screen");

function printNum(x){
    screen.innerHTML += x;
}

function printdel(){
    screen.innerHTML = '';
}

function keyPress(e){
    var x = e.key;
    if ((x >= '0' && x <= '9') || x === '+' || x === '-' || x === '*' || x === '/') {
        screen.innerHTML += x;
    }
}