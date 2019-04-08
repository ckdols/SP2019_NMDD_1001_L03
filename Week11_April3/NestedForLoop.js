function draw() {
  background(220);
  for (i = 0; i <= 400; i = i + 20) {
    for (j = 0; j <= 400; j = j + 20) {
      rect(i, j, 10, 10);
      distance = dist(mouseX, mouseY, i, j);
      if (distance < 50) {
        //fill(255,0,0,5);
        r = 10;
      } else {
        //fill(255);
        r = distance / 10;
      }
      rect(i, j, r, r);
    }
  }
  //print(i);
}
