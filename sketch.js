function setup (){
  createCanvas(w, h)
}
function draw (){
  background(220);
  if (s == 1){
    w = displatWidth; h = displayHeight; text('display', 10, 10)
  }
  else {
    w = screenWidth; h = screenHeight; text('screen', 10, 10)
  }
}
var s = 0;
function mouseClicked (){
  s = 1
  if (s == 1){
    s = 0
  }
}
