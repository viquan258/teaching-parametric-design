const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;

const main = () => {





  const circle1 = circle({
    radius: 6,
    segments: 4,
    center: [0, 0, 0]
});

const circle2 = circle({
  radius: 5,
  segments: 10,
  center: [0, 0, 0]
});

const extrudeShape = extrudeLinear({height: 5}, circle1, circle2);

const unionShape = union(extrudeShape);

const circles = [];
for(let c = 0; c < 20; c += 1) {

  circles.push( rotate(
    [0, Math.PI/30*c, 0],
    translate(
[0, c * 10, 0],
unionShape



  )))

}

 
  return circles;

}


module.exports = { main };