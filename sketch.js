function setup (){
  createCanvas(windowWidth, windowHeight);
  pixelDensity(10.0);
}
function draw (){
  background(110);
  text (canvas.width, 10, 10);
  text (canvas.height, 40, 10);
}
function mouseClicked (){
  fullscreen(!fs);
}

