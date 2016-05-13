var a = 0
var b = 100
var c = 0
var d = 100

function setup() {

    var theCanvas = createCanvas(windowWidth, windowHeight);
//	frameRate(30);
	blendMode (REPLACE);

}


function draw() {
	strokeWeight (10);
	stroke ((255), random (255), random (255));
	background (245,5);
	a = (a + 0.5)%width;
	line (a,0,100,height);
	
	strokeWeight (20);
	stroke (random(255), random (255),(255));
	b = (b + 0.5)%height;
	line (b,0,0,height);
	
	strokeWeight (20);
	stroke ((255), random (255), random(255));
	c = (c + 0.5)%width;
	line (c,0,350,height);
	
	strokeWeight (10);
	stroke (random(255), random (255),(255));
	d = (d + 0.5)%height;
	line (d,0,250,height);
	
//	strokeWeight (10);
//	stroke (0,10);
//	line (0,300,400,300);

	
}





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

