var distance;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (i = 0; i <= 400; i = i + 20) {
    ellipse(i, height / 2, 10, 10);
    distance = dist(i, height / 2, mouseX, mouseY);

    if (distance <= 10) {
      fill(255, 0, 0);
    } else {
      fill(0,0,255);
    }
  }
}
