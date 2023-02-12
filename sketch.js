function setup (){
  createCanvas(windowWidth, windowHeight);
  pixelDensity(100.0);
}
function draw (){
  background(110);
  text (windowWidth, 10, 10);
  text (windowHeight, 40, 10);
}
function mouseClicked (){
  fullscreen(!fs);
}

