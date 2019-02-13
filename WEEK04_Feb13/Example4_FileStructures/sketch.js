var y1;
var n = [];
var randomValue = [];
var wave = 15;

function setup() {
       background(0, 0, 0);
       canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-2');
       canvas.position(0,0);
       canvas.style('z-index', '-1');
  
       for (var j = 0; j < wave; j++) {
              randomValue.push(random(-50, 50));
       }

       for (var m = 0; m < wave; m++) {
              n.push(random(-5, 5));
       }

       y1 = windowHeight / 2;
}

function draw() {

       background(255, 255, 255, 11);
       noFill();
       stroke(0, 0, 0);
       strokeWeight(0.08);
       
       beginShape();
       curveVertex(0, windowHeight / 2);
       curveVertex(0, windowHeight / 2);
       for (var i = 1; i < wave; i++) {
              curveVertex(windowWidth * (i / wave), (2 * (y1 * noise(n[i]))) + randomValue[i]);
       }
       curveVertex(windowWidth, windowHeight / 2);
       curveVertex(windowWidth, windowHeight / 2);
       endShape();

       for (var k = 0; k < wave; k++) {
              n[k] += 0.01;
       }
}

function windowResized() {
       resizeCanvas(windowWidth, windowHeight);
}
