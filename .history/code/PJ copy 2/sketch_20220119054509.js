let sound;

function preload(){
  sound = loadSound('audio.mp3');
  
}

function setup() {
  createCanvas(1000, 4000);
  stroke(100)
  fft = new p5.FFT();
  sound.amp(0.2);
  sound.loop();
  frameRate(0.5);
}

function draw() {
  let spectrum = fft.analyze();
  
  for(let i = 0; i <= spectrum.length; i += 50)
  {

  push();
  fill(spectrum[i])
  translate(width/2, i*6 + 200);
  polygon(0, 0, spectrum[i]/2, 12);
  pop();

 
  }

  if(mouseIsPressed){
    saveFrames('out', 'png', 1, 25, data => {
      print(data);
    });
    }
    

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
