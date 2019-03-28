var x = 0;
var y = 200;
var yInc = 0;
var colorInc = 0;
var colorInc2 = 0;
var direction = true;
var colorChange = true;
var colorChange2 = true;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255, 255, 255, 10);
  noStroke();
  fill(255, colorInc, colorInc2, 50);
  ellipse(x, y, 100, 100);


  if (direction == true) {
    x = x + 3;
  }

  if (direction == false) {
    x = x - 3;
  }

  if (x == 600) {
    direction = false;
  }

  if (x == 0) {
    direction = true;
  }

  if (colorChange == true) {
    colorInc = colorInc + 1;
  }
  if (colorChange == false) {
    colorInc = colorInc - 1;
  }
  if (colorInc == 255) {
    colorChange = false;
  }
  if (colorInc == 0) {
    colorChange = true;
  }

  if (colorChange2 == true) {
    colorInc2 = colorInc2 + 1.5;
  }
  if (colorChange2 == false) {
    colorInc2 = colorInc2 - 1.5;
  }
  if (colorInc2 == 255) {
    colorChange2 = false;
  }
  if (colorInc2 == 0) {
    colorChange2 = true;
  }


  y = 45 * sin(yInc) + 200;
  yInc = yInc + 0.1;
}
