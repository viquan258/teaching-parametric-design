let sound;
let spectrum;
let i;
function preload(){
  sound = loadSound('audio.mp3');
  
}

function setup() {
  i=0;
  createCanvas(1000, 4000);
  stroke(100)
  fft = new p5.FFT();
  sound.amp(0.5);
  sound.loop();
  frameRate(1);
  
}

function draw() {
  spectrum = fft.analyze();

  push();
   i ++;
  fill(spectrum[i])
  translate(width/2,400);
  polygon(0, 0, spectrum[i]/2, 12);
  i++;
  pop();
 // }

/*  if(mouseIsPressed){
    save('image.svg')
    }
  */  

}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape(TRIANGLE_FAN);
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius*4;
    let sy = y + sin(a) * radius*2;
    vertex(sx, sy);
    
  }
  endShape(CLOSE);
}
