var distance;
var yay = false;
var yo = false;
var x = 200;
var y = 100;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  distance =dist(width/2, height/2, mouseX, mouseY);
  
  noStroke();
  fill(255);
  
  if (mouseIsPressed && distance<50) {
    fill(0,0,255);
    yay = true;
  }
  
  if (mouseIsPressed && distance>50) {
    fill(0,255,255);
    yo = true;
  }
  
  if (yay == true){
    x = x +1;
  }
  
  if (yo == true){
    x =x -1;
  }
  
  
  ellipse(x, y, 50,50);
   ellipse(width/2, height/2, 100,100);

  yay = false;
  yo = false;
}
