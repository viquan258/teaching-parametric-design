let sound;
let spectrum;
let j;
let k;
function preload(){
  sound = loadSound('audio.mp3');
  
}

function setup() {
  j=0;
  k =500;
  createCanvas(2000, 40000);
  stroke(100)
  fft = new p5.FFT();
  sound.amp(0.5);
  sound.loop();
  frameRate(1);

  
  
}

function draw() {
  spectrum = fft.analyze();

  push();
  translate(width/2,400);
  if(j%10 == 0){
  translate(0,k);
  k+=500;
  }
  for (let i = 0; i< spectrum.length; i++){
    if(spectrum[i]>60){
      fill(spectrum[i])
      polygon(0, 0,spectrum[i], 12);
    }
  }
  j++;
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
