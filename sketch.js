var w = 1080; h = 1920

function setup (){
  createCanvas(w, h);
  pixelDensity(4.0);
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
  toggleFullScreen();
}
function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScrenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  } 
} 
