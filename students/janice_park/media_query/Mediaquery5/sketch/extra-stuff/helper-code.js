function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));


function inputX() {
    var output = 0;

    if (isTouch) {
        output = touchX;
    } else {
        output = mouseX;
    }

    return output;
}

function inputY() {
    var output = 0;

    if (isTouch) {
        output = touchY;
    } else {
        output = mouseY;
    }

    return output;
}


function inputPreviousX() {
    var output = 0;

    if (isTouch) {
        output = ptouchX;
    } else {
        output = pmouseX;
    }

    return output;
}


function inputPreviousY() {
    var output = 0;

    if (isTouch) {
        output = ptouchY;
    } else {
        output = pmouseY;
    }

    return output;
}