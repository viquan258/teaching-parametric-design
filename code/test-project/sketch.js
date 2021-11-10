const colorValue = random(0,255);
let xValue = random(180,220);

let yValue = 5;
let textColor = "red";
let trueFalse = true; 



function setup (){
    createCanvas (400, 400);
    frameRate(10);
    xValue = random(180, 220);

}


function draw (){
background(colorValue);
stroke("red");
fill("white");
rect(155, 155, 90, 90);
fill ("black");
circle(180 + random()*40,
180 + random()*40,
50);
nofill();

}
