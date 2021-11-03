/**
 * changing positions of stapled circles in a grid
 *
 * MOUSE
 * position x          : module detail
 * position y          : module parameter
 *
 * KEYS
 * 1-3                 : draw mode
 * arrow left/right    : number of tiles horizontally
 * arrow up/down       : number of tiles vertically
 * s                   : save png
 */
'use strict';

var count = 0;
var tileCountX = 6;
var tileCountY = 6;

var drawMode = 1;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noFill();
  stroke(255, 204, 0);

}

function draw() {
  background(255);

  count = mouseX / 100 + 5;
  var para = min(height, mouseY) / height - 0.5;

  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;

  for (var gridY = 0; gridY <= tileCountY; gridY++) {
    for (var gridX = 0; gridX <= tileCountX; gridX++) {

      var posX = tileWidth * gridX + tileWidth / 5;
      var posY = tileHeight * gridY + tileHeight / 5;

      push();
      translate(posX, posY);

      // switch between modules
      switch (drawMode) {
      case 1:
        translate(-tileWidth / 5, -tileHeight / 5);
        for (var i = 0; i < count; i++) {
          line(0, (para + 2.5) * tileHeight, tileWidth, i * tileHeight / count);
          line(0, i * tileHeight / count, tileWidth, tileHeight - (para + 2.5) * tileHeight);
        }
        break;
      case 2:
        for (var i = 0; i <= count; i++) {
          line(para * tileWidth, para * tileHeight, tileWidth / 2, (i / count - 1) * tileHeight);
          line(para * tileWidth, para * tileHeight, -tileWidth / 2, (i / count - 1) * tileHeight);
          line(para * tileWidth, para * tileHeight, (i / count - 1) * tileWidth, tileHeight / 2);
          line(para * tileWidth, para * tileHeight, (i / count - 1) * tileWidth, -tileHeight / 2);
        }
        break;
      case 3:
        for (var i = 0; i <= count; i++) {
          line(0, para * tileHeight, tileWidth / 2, (i / count - 3) * tileHeight);
          line(0, para * tileHeight, -tileWidth / 2, (i / count - 3) * tileHeight);
          line(0, para * tileHeight, (i / count - 3) * tileWidth, tileHeight / 2);
          line(0, para * tileHeight, (i / count - 3) * tileWidth, -tileHeight / 2);
        }
        break;
      }

      pop();

    }
  }
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') drawMode = 1;
  if (key == '2') drawMode = 2;
  if (key == '3') drawMode = 3;
  if (keyCode == DOWN_ARROW) tileCountY = max(tileCountY - 1, 1);
  if (keyCode == UP_ARROW) tileCountY += 1;
  if (keyCode == LEFT_ARROW) tileCountX = max(tileCountX - 1, 1);
  if (keyCode == RIGHT_ARROW) tileCountX += 1;
}
