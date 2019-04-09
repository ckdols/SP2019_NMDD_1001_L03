var r = 200;
var x = 200;
var y = 200;

function preload() {
  //energyData = loadJSON("dataOriginal.json");
  energyData = loadJSON("data.json");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
print(energyData.energy[0].Mar09);

  //push(); // Start a new drawing state
//   translate(x, y);

//   stroke(255, 204, 0);
//   strokeWeight(1);
//   line((energyData.energy[0].Aug08) * (cos(0)), energyData.energy[0].Aug08 * (sin(0)), 0, 0);
//   stroke(255, 204, 0);
//   strokeWeight(4);
//   line((energyData.energy[0].Sep08) * (cos(2 * PI / 12)), energyData.energy[0].Sep08 * (sin(2 * PI / 12)), 0, 0);
//   line((energyData.energy[0].Oct08) * (cos(4 * PI / 12)), energyData.energy[0].Oct08 * (sin(4 * PI / 12)), 0, 0);
//   line((energyData.energy[0].Nov08) * (cos(6 * PI / 12)), energyData.energy[0].Nov08 * (sin(6 * PI / 12)), 0, 0);
//   line((energyData.energy[0].Dec08) * (cos(8 * PI / 12)), energyData.energy[0].Dec08 * (sin(8 * PI / 12)), 0, 0);
//   line((energyData.energy[0].Jan09) * (cos(10 * PI / 12)), energyData.energy[0].Jan09 * (sin(10 * PI / 12)), 0, 0);
//   line((energyData.energy[0].Feb09) * (cos(PI)), energyData.energy[0].Feb09 * (sin(PI)), 0, 0);
//   line((energyData.energy[0].Mar09) * (cos(14 * PI / 12)), energyData.energy[0].Mar09 * (sin(14 * PI / 12)), 0, 0);
//   line((energyData.energy[0].Apr09) * (cos(16 * PI / 12)), energyData.energy[0].Apr09 * (sin(16 * PI / 12)), 0, 0);
//   line((energyData.energy[0].May09) * (cos(18 * PI / 12)), energyData.energy[0].May09 * (sin(18 * PI / 12)), 0, 0);
//   line((energyData.energy[0].Jun09) * (cos(20 * PI / 12)), energyData.energy[0].Jun09 * (sin(20 * PI / 12)), 0, 0);
//   line((energyData.energy[0].July09) * (cos(22 * PI / 12)), energyData.energy[0].July09 * (sin(22 * PI / 12)), 0, 0);
  //pop();

  //print(Data[0].BuildingAddress);
}
