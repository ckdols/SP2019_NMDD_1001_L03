  var x = 0;
  var y;
  var booleanYay = true;

  function setup() {
    createCanvas(500, 500);
    //background(220);
    //ellipse(250,250,50,40);
  }


  function draw() {

    background(255, 0, 0);
    ellipse(x, height / 2, 50, 50);
    // condition 1... set boolean false
    if (x >= 500) {
      booleanYay = false;
    }
    // condition 2... set boolean  true
    if (x <= 0) {
      booleanYay = true;
    }
    // if condition 1 is met.... speed is negative
    if (booleanYay == false) {
      x = x - 3;
    }
    // if condition 2 is met.... speed is positive
    if (booleanYay == true) {
      x = x + 3;
    }

    print(booleanYay);

  }
