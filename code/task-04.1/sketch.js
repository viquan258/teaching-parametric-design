let flower = [];
let centerX = 200;
let centerY = 200;
let numVertices = 8;
let steps = 8;
let spacing = 360/ numVertices;


function setup() {
  
    createCanvas(400, 400, SVG);
    background(255,255,255);
    stroke(255,0,0);
    noFill()
}


    
 
  
    function draw(){
    for (let i = 0; i < numVertices + 1; i++) {
      
      angle = i * spacing;
      
      x = centerX + cos(radians(angle)) * 180;
      y = centerY + sin(radians(angle)) * 180;
    
      cAngle = angle - spacing;
        
      cX = centerX + cos(radians(cAngle)) * 50;
      cY = centerY+  sin(radians(cAngle)) * 50;
    
      flower.push(cX, cY, x, y);
    }
  
    for (i = 0; i < flower.length; i+=2) {
      
      x1=flower[i];
      y1=flower[i+1];  
      
      qcX=flower[i+2];
      qcY=flower[i+3];
      
      x2=flower[i+6];
      y2=flower[i+7];
      
      for (k=0; k <= steps; k++) {
        t = k/steps;
        cPx2 = (1-t)*(1-t)* x1+2 * (1-t)*t*qcX + t*t*x2;
        cPy2 = (1-t)*(1-t)* y1+2 * (1-t)*t*qcY + t*t*y2;
        
        circle(cPx2, cPy2, 10);
      }
    }
    noLoop();
    save('sketch.svg')

  }
