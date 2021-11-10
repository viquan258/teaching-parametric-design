let i = 0;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  frameRate(5);
  noLoop();
  colorMode(RGB, 255)
 
}

function draw() {
 
  i = i + 30;
  let j = random(255,100)

  fill(j,0,255)
  let a = (90 + i, 90 + i);
  translate(width / 2, height / 2);
  angleMode(DEGREES);
  rotate(a);
  rect(0, 0, 300, 50);

 
}

function mousePressed() {
  loop();

}

function mouseReleased() {
  noLoop();
}
