function setup (){
  createCanvas(windowWidth, windowHeight);
  pixelDensity();
}
function draw (){
  background(110);
  text (canvas.width, 10, 10);
  text (canvas.height, 40, 10);
  text(mouseX, 70, 10)
  text(mouseY, 100, 10)
}
var x = canvas.width, y = canvas.height
function mouseClicked (){
  fullscreen();
}

