var color1;
var color2;
var color3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  color1 = random(0, 255);
  color2 = random(0, 255);
  color3 = random(0, 255);

  fill(color1, color2, color3);
  noStroke();

  if (mouseIsPressed) {
    ellipse(mouseX + 10, mouseY + 10, 10, 10);
    ellipse(mouseX - 10, mouseY - 10, 10, 10);
    ellipse(mouseX - 10, mouseY + 10, 10, 10);
    ellipse(mouseX + 10, mouseY - 10, 10, 10);
  } else {
    rectMode(CENTER);
    rect(mouseX, mouseY, 10, 10);
  }


}
