const jscad = require('@jscad/modeling')
const {line, arc, circle, ellipse, rectangle, cube, sphere, cylinder, cuboid, roundedCuboid, geodesicSphere, ellipsoid, roundedCylinder, cylinderElliptic, torus} = jscad.primitives;
const {extrudeRectangular, extrudeLinear, extrudeRotate} = jscad.extrusions;
const {colorize, colorNameToRgb} = jscad.colors;
const {union, subtract, intersect, scission} = jscad.booleans;
const {translate, rotate, scale, center, align} = jscad.transforms;



const main = () => {

  let values = [8,3,4,6,7, 23, 19, 23, 18, 23, 91, 28, 23, 12, 1, 4, 12, 6, 9, 12, 8, 21, 34, 12, 34, 23]

 

  const circle1 = circle({
    radius: 4,
    segments: 9,
    center: [0, 0, 0]
})

const shape = ellipse({
  center: [2,2],
  radius: [2, 40],
  startAngle: 0,
  endAngle: Math.PI , //full arc
  segments: 16 // level of detail
});





const extrudeShape = extrudeLinear({height: 0.2}, shape);

;







const circles = [];


  for(let l = 0; l <= values.length; l++)
  {

  const extrudeShape1 = extrudeLinear({height: values[l]}, circle1);
  const unionShape1 = union([extrudeShape, extrudeShape1]);
  circles.push( 
    rotate(
    [0,  0 , Math.PI/2*values[l]],
    translate(
      [0, 0, l*5],
unionShape1
  )));

  
    }



 
  return circles;

}


module.exports = { main };