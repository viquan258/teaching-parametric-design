let curves = [];

function setup() {
createCanvas(400,400);
frameRate(5);
for(let i = 0; i < 50; i ++ ){
  let x = random(width);
  let y = random(height);
  let z = random(0, 80)
curves[i]  = new Curve(x, 200, 20);


}

}

function draw() {
background(0);
for (let i = 0; i < curves.length; i++){
curves[i].move();
curves[i].show();
stroke(random(0,255),random(0, 255), random(0, 255));

}

}

class Curve{
  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
  }

      move(){
        
      this.x = this.x + random(-5,5);
      this.y = this.y + random(-5,5);
        
      }

  show(){
   
    strokeWeight(4);
    noFill();
    
    

    bezier( 0 , 0, this.z + 100,
      this.y + 100, this.x + 120, this.z + 120,
      this.x*10, this.y*10);

    bezier( 400, 0, this.z - 10,
        this.y - 10, this.x - 10, this.z - 10,
        this.x*10-100, this.y*10 - 100);
      
  
  

  
    
    


  }
}