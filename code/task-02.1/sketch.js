
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
 
}


function draw() {

  background(255, mouseX+200, 140, 50);

    noFill();
  stroke(0);
  strokeWeight(1);
  

beginShape();
  let spacing = map(mouseX, 0, width, 5, 100);

for(let a = 0; a < 360; a += spacing){
  
  let x1 = 50*sin(a) + mouseX;
  let y1 = 50*cos(a) + mouseY;
  let cx1 = x1 + 50;
  let cy1 = y1 + 50;
  let cx2 = cx1 + 100;
  let cy2 = cy1 + 100;
  let cx3 = cx2 + 200;
  let cy3 = cy2 + 200
  
  vertex(x1, y1);
  bezierVertex(cx1, cy1, cx2, cy2, cx3, cy3);

  
  stroke( mouseX+50, 100, 255, 200)
  
  
}
  


  
endShape(CLOSE);
  
}


