let leaves = []

  
function setup() {
  createCanvas(400, 400);
  frameRate(10);
  for(let i = 0; i <= 100; i ++ ){
    let x = random(width);
    let y = random(height);
    let z = random(0, 400)
  leaves[i]  = new Leaf(x, y, z);
  
  
  }
  
  }
  
  function draw() {
  background(255);
  noLoop();
  save('sketch.png');
  for (let i = 0; i < leaves.length; i++){

  leaves[i].show();
  stroke(128,128,128, random(0,255));
  strokeWeight(2)
  
  }
  
  }
  
  class Leaf{
    constructor(x, y, z){
      this.x = x;
      this.y = y;
      this.z = z;
    }
  

  
    show(){
     
      strokeWeight(4);
      noFill();
      bezier( this.x , this.y, this.x - 75,
        this.y - 10, this.x +5, this.y + 70, this.x, this.y);


    }

    

  }