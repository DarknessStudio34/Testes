function setup (){
  createCanvas(windowWidth, windowHeight);
  pixelDensity();
}
function draw (){
  background(110);
  text (canvas.width, 10, 10);
  text (canvas.height, 40, 10);
  rect(canvas.width, 1, 0, canvas.height );
}
var x = canvas.width, y = canvas.height
function mouseClicked (){
  fullscreen(!fs);
}

